import React, { Component } from 'react';

import LevelUp from '../Images/LevelUp.png' 
import Course22 from './Course22'; 
import Connection from '../Services/Connection';

class ViewCourse extends Component {

    constructor(props) {
        super(props);

        this.state = {

            project: []
        } 

        // this.back=this.back.bind(this);

    }

    componentDidMount() {
        Connection.getProjects().then(
            (res) => {
                console.log(res.data);

                this.setState((state) => ({ project: res.data }))
                console.log(this.state.project);
            }
        )
    } 

    back()
    {
        this.props.history.replace("/Admin")
    }

    render() {
        return <div className="Learn">
            <div className="Learn-Header">

                <div className="Main-Header-Logo">

                    <img className="Main-Header-Logo-Image" src={LevelUp}></img>
                </div>

                <div className="Main-Header-Title">
                    <h1 >Courses</h1>
                </div>

                <div className="Main-Header-Login">
                    <button onClick={() => { this.back() }}>Back</button>
                </div>
            </div>

            <div className='video-grid'>

                {this.state.project.map((course, index) => <Course22 key={index} post={course} id={index} />)}

            </div>
        </div>
    }
}

export default ViewCourse;