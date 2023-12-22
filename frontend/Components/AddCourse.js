import React, { Component } from 'react';
import LevelUp from '../Images/LevelUp.png'

import Connection from '../Services/Connection';
import { withRouter } from 'react-router-dom';


class AddCourse extends Component {
    constructor(props) {
        super(props);

        // Bind the handleSubmit method to the class instance
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.back = this.back.bind(this)

    }


    handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.Name.value;
        const creditHr = event.target.elements.CreditHr.value;
        const author = event.target.elements.Author.value;
        const description = event.target.elements.Description.value;
        const status = 0;

        const record =
        {
            projectName: name,
            projectCredit: creditHr,
            projectAuthor: author,
            projectDescription: description,
            projectStatus: status
        }

        Connection.createProject(record).then(
            (res) => {
                this.props.history.push('/Admin')
            }
        )


        console.log(record);
    } 

    back() 
    {
        this.props.history.push('/Admin')
    }

    render() {
        return <div className="Learn">
            <div className="Learn-Header">

                <div className="Main-Header-Logo">

                    <img className="Main-Header-Logo-Image" src={LevelUp}></img>
                </div>

                <div className="Main-Header-Title">
                    <h1 > Add Course</h1>
                </div>

                <div className="Main-Header-Login">
                    <button onClick={() => { this.back() }}>Back</button>
                </div>
            </div>

            <div className="Register-Detail" >

                <form className="Register-Detail-Form" onSubmit={this.handleSubmit}>

                    <div className="Register-Detail-Form-Grid">
                        <div>
                            Name:
                        </div>
                        <input placeholder="Name" name="Name"></input>
                    </div>

                    <div className="Register-Detail-Form-Grid">
                        <div>
                            CreditHr:
                        </div>
                        {/* <textarea name="paragraph_text" cols="50" rows="10"></textarea> */}
                        <input placeholder="CreditHr" name="CreditHr"></input>
                    </div>

                    <div className="Register-Detail-Form-Grid">
                        <div>
                            Author:
                        </div>
                        <input placeholder="Author" name="Author"></input>
                    </div>

                    <div className="Register-Detail-Form-Grid">
                        <div>
                            Description:
                        </div>

                        <textarea name="Description" cols="50" rows="5"></textarea>

                    </div>

                    {/* {this.state.error && (
                        <div style={{ color: 'red', marginBottom: '10px' }}>
                            {this.state.error}
                        </div>
                    )} */}

                    <div className="Register-Detail-Form-Grid2">
                        <button >Submit</button>

                    </div>
                </form>
            </div>




        </div>
    }
}

export default AddCourse