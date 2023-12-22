import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

import Connection from '../Services/Connection';

import LevelUp from '../Images/LevelUp.png'
import Jackson from '../Images/Lord_Music.jpg'
import Swimming from '../Images/Swimming.webp'
import Driving from '../Images/Driving.jpg'
import Cooking from '../Images/Cooking.jpg'
import Writing from '../Images/writing.png'
import Drama from '../Images/Drama.jpg'
import Scuba from '../Images/Scuba.jpg'
import Riding from '../Images/Riding.jpg'
import Hiking from '../Images/Hiking.png'
import Camping from '../Images/Camping.jpg'
import Speaker from '../Images/Speaker.jpg'

class Course4 extends Component {
    constructor(props) {
        super(props);
        this.arr = [Jackson, Swimming, Driving, Cooking, Writing, Drama, Scuba, Riding, Hiking, Camping, Speaker]; 

        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount() { 
        console.log("You");
        console.log(this.props.post);
        console.log(this.props.id);

    } 

    handleSubmit(event)
    {   

        // event.preventDefault();  
        const credit = event.target.elements.Credit.value;  

        const convertCredit=Number(credit);
        console.log(convertCredit);
        console.log(typeof convertCredit); 

        Connection.updateCreditHours(this.props.post.projectId,convertCredit).then( )
        // this.props.history.push('/Admin')
    }

    render() {
        return <div className="Photo">
            <div className="Photo-Space">
                <img className="Photo-Image" src={this.arr[this.props.id]} ></img>
            </div>

            <div className="Photo-Des">
                <p>{this.props.post.projectDescription}</p>
            </div>


            <div className='Photo-Table'>
                <div className="Photo-Details">

                    {/* <div className='Photo-Table'> */}
                    <div className='Photo-Details-Table'>
                        <div>
                            Trainer:
                        </div>

                        <div>
                            {this.props.post.projectAuthor}
                        </div>
                    </div>

                    <div className='Photo-Details-Table'>
                        <div>
                            Credit Hours:
                        </div>

                        <div>
                            {this.props.post.projectCredit}
                        </div>
                    </div>
                    {/* </div> */}

                </div> 

                <div  className="Photo-More-Admin-Change"> 
                    <h3>Change Credits:</h3>
                </div>


                <div className="Photo-More-Admin" >
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="number" name="Credit"></input>
                        </div>

                        <button onClick={() => { }}>Submit</button>
                    </form>
                </div>

            </div>

        </div>
    }
}

export default withRouter(Course4)