import React, { Component } from 'react';
import ReactDom from 'react-dom/client'; 

import LevelUp from '../Images/LevelUp.png' 

import Connection from '../Services/Connection'; 

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

class CourseDetail extends Component {
    constructor(props) {
        super(props) 
        
        console.log("yellow")
        console.log(this.props.location.projectId); 
        console.log(this.props.location.imageId); 
        console.log(this.props.location.employee); 

        // const storedProject = localStorage.getItem('project') || {};  
        this.state = {
            project: {}, 
            error: null,
            image:null,
            storedEmpID : localStorage.getItem('employeeId'),
            storedProjectID : localStorage.getItem('projectId')
        }; 

        this.arr = [Jackson, Swimming, Driving, Cooking, Writing, Drama, Scuba, Riding, Hiking, Camping, Speaker,Game_Development]; 

        this.payment=this.payment.bind(this);
    } 

    componentDidMount()
    {    
        console.log("composd")  
        console.log(this.props.location.projectId);
        console.log(this.props.location.imageId);

          // Save the project ID and image ID to localStorage
    
                // Check if projectId and imageId exist in props.location
        if (this.props.location && this.props.location.projectId) {
            // Save the project ID and image ID to localStorage
            localStorage.setItem('projectId', this.props.location.projectId);
            localStorage.setItem('imageId', this.props.location.imageId); 
            this.setState({image:this.props.location.imageId});


            // Fetch project data
            Connection.getProjectById(this.props.location.projectId)
                .then((res) => {
                    console.log(res.data);

                    // Update the state with the received project data
                    const projectData = res.data;
                    this.setState({ project: projectData[0] }); 
                    this.setState({ storedEmpID : localStorage.getItem('employeeId')});
                    this.setState({ storedProjectID : localStorage.getItem('projectId')});
                    
                    // Store the project data in localStorage
                    localStorage.setItem('project', JSON.stringify(projectData[0]));
                })
                .catch((error) => {
                    console.error('Error fetching project data:', error);
                });


        } else if (localStorage.getItem('projectId') && localStorage.getItem('imageId')) {
            // Use the stored project ID and image ID from localStorage
            const storedProjectId = localStorage.getItem('projectId');
            const storedImageId = localStorage.getItem('imageId'); 

            this.setState({image:storedImageId}); 
            this.setState({ storedEmpID : localStorage.getItem('employeeId')});
                    this.setState({ storedProjectID : localStorage.getItem('projectId')});

            // Fetch project data
            Connection.getProjectById(storedProjectId)
                .then((res) => {
                    console.log(res.data);
                    // Update the state with the received project data
                    const projectData = res.data;
                    this.setState({ project: projectData[0] });

                    // Store the project data in localStorage
                    localStorage.setItem('project', JSON.stringify(projectData[0]));
                })
                .catch((error) => {
                    console.error('Error fetching project data:', error);
                });


        } else {
            // Redirect the user to the home page or handle the situation accordingly
            console.error('Project ID or Image ID not available. Redirecting to login page...');
            // Example of redirecting to the home page (you may need to adjust this based on your routing)
            this.props.history.push('/Levelup');
        } 
 
    }  

    back()
    {
        console.log(this.state.project);
        console.log(this.state.image);
    }   

    payment()
    {
         // Display a confirmation dialog
         const isConfirmed = window.confirm(
            `Are you sure?\n (${this.state.project.projectCredit} Hrs) will be deducted from your account.`
        );

        if(isConfirmed)
        {
            Connection.addProjectToEmployee(this.state.storedEmpID,this.state.storedProjectID).then( 
                (res) => { 
                    console.log(res.data); 
                    this.props.history.push('/Levelup');
                }
            ).catch(error => { 

                let prompt='';
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    this.setState({ error: `Error: ${error.response.data}` }); 

                    prompt=`Error: ${error.response.data}`
                } else if (error.request) {
                    // The request was made but no response was received
                    this.setState({ error: 'No response received.' }); 

                    prompt='No response received.'
                } else {
                    // Something happened in setting up the request that triggered an Error
                    this.setState({ error: `Error: ${error.message}` }); 

                    prompt=`Error: ${error.message}`
                } 

                // alert(this.state.error); 
                alert(prompt);
            })

            // this.props.history.push('/Levelup')
        } 

        else 
        {
            return;
        }
    }

    render() {
        return <div className="Learn">
                    <div className="Learn-Header">

                        <div className="Main-Header-Logo">

                            <img className="Main-Header-Logo-Image" src={LevelUp}></img>
                        </div>

                        <div className="Main-Header-Title">
                            <h1 >Level Up</h1>
                        </div>

                        <div className="Main-Header-Login">
                            <button onClick={() => { this.back() }}>Back</button>
                        </div>
                    </div>  

                    <div className = "Course-Detail"> 

                            <div> 
                               <img className="Photo-Image" src={this.arr[this.state.image]} ></img>
                            </div>

                            <div>
                                    <div className="Course-Theory">
                                        <div > 
                                            <div className='Course-Theory-Title'>
                                                <div> 
                                                    <h1>{this.state.project.projectName}</h1>  
                                                </div> 
                                                <div> 
                                                    <h1>{this.state.project.projectCredit} Hr</h1>
                                                </div>
                                            </div>

                                            {/* <h1>{this.state.project.projectName}</h1> */}
                                            {/* {this.storedProject.projectName} */}
                                        </div>  

                                        <div>   
                                             <p>By {this.state.project.projectAuthor}</p>
                                        </div> 

                                        <div>   
                                            <p>{this.state.project.projectDescription} </p>
                                        </div>
                                    </div>
                            </div>  

                            {/* <div className="Hour-Absolute"> 
                                   <p>{this.state.project.projectCredit} Hr</p>
                            </div> */} 

                            <div className='Enroll'> 
                                <button onClick={ ()=> {this.payment()}}>Enroll Now</button>
                            </div>
                            

                    </div>
               </div>
    }
}

export default CourseDetail