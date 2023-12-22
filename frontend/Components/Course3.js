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
import Game_Development from '../Images/Game_Development.jpg'



class Course3 extends Component {
    constructor(props) {
        super(props);
        this.arr = {
                    Dance:Jackson, 
                    Swimming:Swimming, 
                    FormulaOne:Driving, 
                    Cooking:Cooking, 
                    Writing:Writing, 
                    Drama:Drama, 
                    Scuba:Scuba, 
                    Riding:Riding, 
                    Hiking:Hiking, 
                    Camping:Camping, 
                    Speaker:Speaker,
                    Game_Development:Game_Development

                };
        
        this.pic=this.props.post.projectName;

        if(this.pic === 'Public Speaking') 
        {
            this.pic = "Speaker"
        }
        // this.moreDetails = this.moreDetails.bind(this); 
        console.log("Yo Bro")  
        console.log(this.props.post)
        // console.log(this.props.post);
        // console.log(this.props.employee)
    }

    // moreDetails() { 
        
    //     console.log(this.props.post.projectId); 
    //     console.log(this.props.id);
    //     this.props.history.push(   { pathname:'/Levelup/CourseDetail',
    //     projectId:this.props.post.projectId , imageId:this.props.id, employee:this.props.employee});

    // } 

    unEnroll()
    {
         // Display a confirmation dialog
         const isConfirmed = window.confirm(
            `Are you sure?\n Crdeit Hrs will not be refunded.`
        );

        if(isConfirmed)
        {
            Connection.deleteProjectFromEmployee(localStorage.getItem('employeeId'),this.props.post.projectId).then( 
                (res) => { 
                    console.log(res.data);
                }
            )  

            this.props.history.push('/Levelup')
        } 

        else 
        {
            return;
        }
    }

    render() {
        return <div className="Photo">
                    <div className="Photo-Space">
                        <img className="Photo-Image" src={this.arr[this.pic]} ></img>
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

                            <div className='Photo-Details-Table'>
                                <div>
                                    Status:
                                </div>

                                <div>
                                    {this.props.post.projectStatus + '%'}
                                </div>
                            </div>
                            {/* </div> */}

                        </div>

                        <div className="Photo-More">
                            <button onClick={() => { this.unEnroll() }}>Unenroll</button>
                        </div>
                    </div>



        </div>
    }
}

export default withRouter(Course3)