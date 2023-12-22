import React, { Component } from 'react';
import ReactDom from 'react-dom/client';   

import LevelUp from '../Images/LevelUp.png' 

import Connection from '../Services/Connection'; 
import Course2 from './Course2'

class Levelup extends Component 
{
    constructor(props)
    {
         super(props);
            // Check if the employee data is available in localStorage

        const storedEmployee = localStorage.getItem('employeeId');
        const employee = storedEmployee ? JSON.parse(storedEmployee) : {};
        
        // console.log("Nigga");
        // console.log(storedEmployee.); 


        this.state = {
                        employee: {},
                        project:[]
                    }; 

        this.logOut=this.logOut.bind(this)
        this.myProfile = this.myProfile.bind(this);
    } 
    componentDidMount()
    {  
        if (this.props.location && this.props.location.id) {

            // Save the employee ID to localStorage
            localStorage.setItem('employeeId', this.props.location.id);
        
            Connection.getEmployeeById(this.props.location.id)
              .then((res) => {
                console.log(res.data);
                
                // Update the state with the received data
                const employeeData = res.data;

                this.setState({ employee: employeeData[0] || {} });
        
                // Store the employee data in localStorage
                localStorage.setItem('employee', JSON.stringify(employeeData));
              })
              .catch((error) => {
                console.error('Error fetching employee data:', error);
              });

          } else if (localStorage.getItem('employeeId')) {
            // Use the stored employee ID from localStorage
            const storedEmployeeId = localStorage.getItem('employeeId');
            Connection.getEmployeeById(storedEmployeeId)
              .then((res) => {
                console.log(res.data);
                // Update the state with the received data
                const employeeData = res.data;
                this.setState({ employee: employeeData[0] || {} });
        
                // Store the employee data in localStorage
                localStorage.setItem('employee', JSON.stringify(employeeData));
              })
              .catch((error) => {
                console.error('Error fetching employee data:', error);
              });
          } else {
            // Redirect the user to the login page or handle the situation accordingly
            console.error('Employee ID not available. Redirecting to login page...');
            // Example of redirecting to the login page (you may need to adjust this based on your routing)
            this.props.history.push('/');
          }  
          
          Connection.getProjects().then( 
            (res) => { 
                console.log(res.data); 
                 
                this.setState ( (state) => ( { project:res.data}))
                console.log(this.state.project);
            }
          )
    } 
    
    back()
    {
        console.log(this.state.employee)
    }  

    myProfile()
    {
      this.props.history.push(('/Levelup/MyProfile'));
    }

    logOut()
    {
      this.props.history.replace('/');
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

                        <div  className="Main-Header-Login">
                            <button onClick ={ () => {this.myProfile()} }>My Profile</button>
                        </div>
                    </div>  

                    <div className="Welcome">
                       <div className="Welcome-des">
                           <h1>Welcome</h1>
                       </div>
                       <div className='Welcome-nam'> 
                            <h1>{this.state.employee.empNam}</h1>
                       </div>   
                    </div> 

                    <div className='video-grid'>
                                    {this.state.project.map((course,index) => <Course2 key={index} post={course} id={index} employee={this.state.employee} />)} 
                    </div> 

                    {/* <div> 
                         <button onClick={()=> {this.logOut()}}>Log Out</button>
                    </div> */}

                    

                 </div> 
    }
} 

export default Levelup