import React, { Component } from 'react';
import LevelUp from '../Images/LevelUp.png'

import MyImage from '../Images/profile.png'

import Connection from '../Services/Connection';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state =
        {
            employee: {},
            projects: [],
            showDropdown: false
        }

        this.courses = this.courses.bind(this);
        this.Check = this.Check.bind(this); 
        this.logOut=this.logOut.bind(this);

    }

    componentDidMount() {
        if (localStorage.getItem('employeeId')) {
            const storedEmployeeId = localStorage.getItem('employeeId');
            Connection.getEmployeeById(storedEmployeeId).then(
                (res) => {

                    console.log(res.data);
                    // Update the state with the received data
                    const employeeData = res.data;

                    this.setState({ employee: employeeData[0] });
                    this.setState({ projects: employeeData[0].assignedProjects });

                    // Store the employee data in localStorage
                    localStorage.setItem('employee', JSON.stringify(employeeData));
                }
            )
        }
        else {
            console.log("EmployeeID not found redirecting to main page")
            this.props.history.replace("/")

        }
    }  

    logOut()
    {   
        // sessionStorage.clear(); 
        // Clear the entire local storage
        localStorage.clear();
        this.props.history.replace("/")
    }

    courses() {
        this.props.history.push("/Levelup/MyProfile/MyCourse")
    }

    Check() {
        console.log(this.state.employee);
        console.log(this.state.projects)
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



                <div className='check'>

                    <div className="Main-Header-Hamburger" onClick={() => {
                        this.setState((prevState) => ({
                            showDropdown: !prevState.showDropdown,
                        }));
                    }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>

                {this.state.showDropdown && (
                    <div className="Dropdown-Menu">
                        {/* Add your dropdown menu items here */}
                        <div className="Dropdown-Menu-b">

                            <button onClick={() => this.courses()}>Courses</button>
                        </div>
                        <div>

                            <button onClick={() => this.logOut()}>Log Out</button>
                        </div>
                        {/* Add more items as needed */}
                    </div>
                )}

                <div className="Main-Header-Login-MyCourse">


                    <div>
                        <button onClick={() => { this.courses() }}>Courses</button>
                    </div>

                    <div>
                        <button onClick={() => { this.logOut() }}>Log Out</button>
                    </div>
                </div>


            </div>

            <div className="Course-Detail">

                <div className='Photo-Image-Div'>
                    <img className="Photo-Image-Profile" src={MyImage} ></img>
                </div>

                <div>
                    <div className="Course-Theory">

                        <div className='Course-Theory-Title-Profile'>

                            <div>
                                <h1> {this.state.employee.empNam}</h1>
                            </div>


                            {/* <h1>{this.state.project.projectName}</h1> */}
                            {/* {this.storedProject.projectName} */}
                        </div>

                        <div className='Course-Theory-Title-Profile'>

                            <div>
                                <p>Email: </p>
                            </div>

                            <div>
                                <p>{this.state.employee.emailID}</p>
                            </div>

                        </div>

                        <div className='Course-Theory-Title-Profile'>

                            <div>
                                <p>Mobile:</p>
                            </div>

                            <div>
                                <p>{this.state.employee.mobileNo}</p>
                            </div>

                        </div> 

                        <div className='Course-Theory-Title-Profile'>

                            <div>
                                <h3>Total Credits:</h3>
                            </div>

                            <div>
                                <h3>{this.state.employee.creditHours}</h3>
                            </div>

                        </div>


                    </div>
                </div>

                {/* <div className='Enroll'>
                    <button onClick={() => { this.Check() }}>Check</button>
                </div> */}


            </div>




        </div>
    }
}

export default Profile 