import React, { Component } from 'react';  

import Connection from '../Services/Connection'; 
import LevelUp from '../Images/LevelUp.png'; 
import Course3 from './Course3';

class MyCourse extends Component 
{

    constructor(props)
    {
        super(props); 
        this.state= 
        {
            employee:{},
            projects:[],
            showDropdown: false
        } 

        this.logOut=this.logOut.bind(this);
    } 

    componentDidMount()

    {

        if (localStorage.getItem('employeeId')) 
        {     
              const storedEmployeeId = localStorage.getItem('employeeId');
              Connection.getEmployeeById(storedEmployeeId).then( 
                (res) => { 

                            console.log(res.data);
                                        // Update the state with the received data
                            const employeeData = res.data;

                            this.setState({ employee: employeeData[0]});
                            this.setState({ projects: employeeData[0].assignedProjects});
                    
                            // Store the employee data in localStorage
                            localStorage.setItem('employee', JSON.stringify(employeeData));
                } 
              )
        } 
        else 
        {
            console.log("EmployeeID not found redirecting to main page") 
            this.props.history.replace("/")

        }
    } 

    profile()
    {
        console.log(this.state.employee);
        console.log(this.state.projects);
    } 

    logOut()
    {   
             // Clear the entire local storage
        localStorage.clear();
        this.props.history.replace('/')
    }

    render() 
    {
        return  <div className="Learn"> 
                        <div className="Learn-Header">

                            <div className="Main-Header-Logo">
                                
                                    <img className ="Main-Header-Logo-Image" src={LevelUp}></img>        
                            </div> 

                            <div className="Main-Header-Title"> 
                                <h1 >Level Up</h1>
                            </div>
                            
                            <div className="Main-Header-Login-MyCourse">

                                <div>
                                    <button onClick ={ () => {this.logOut() } }>Log Out</button>
                                </div>    
                            </div>
                        
                        </div>   

                           <div className='video-grid'>
                                    {this.state.projects.map((course,index) => <Course3 key={index} post={course}  />)} 
                        </div>  


                </div>
    } 
}

export default MyCourse