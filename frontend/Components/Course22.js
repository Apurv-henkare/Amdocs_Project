import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


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
import Game_development from '../Images/Game_Development.jpg'



class Course22 extends Component {
    constructor(props) {
        super(props);
        this.arr = [Jackson, Swimming, Driving, Cooking, Writing, Drama, Scuba, Riding, Hiking, Camping, Speaker,Game_development];

        // this.moreDetails = this.moreDetails.bind(this); 
        console.log("Yo Bro")
        // console.log(this.props.post);
        // console.log(this.props.employee)
    }



    render() {
        return <div className="Photo">
            <div className="Photo-Space">
                <img className="Photo-Image" src={this.arr[this.props.id]} ></img>
            </div>

            <div className="Photo-Title">
                <h2>{this.props.post.projectName}</h2>
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
                {/* 
                        <div className="Photo-More">
                            <button onClick={() => { }}>More Details</button>
                        </div> */}
            </div>



        </div>
    }
}

export default withRouter(Course22)