import React, { Component } from 'react';
import jsPDF from 'jspdf'

import LevelUp2 from '../Images/LevelUp2.png'

import Course from '../Images/Admin_Course.jpg' 

import Connection from '../Services/Connection';


class Admin extends Component {

    constructor(props) {
        super(props);

        this.viewCourses = this.viewCourses.bind(this);
        this.logOut = this.logOut.bind(this); 
        this.addCourse =this.addCourse.bind(this); 
        this.editCourse=this.editCourse.bind(this); 
        this.generatePDF=this.generatePDF.bind(this);
    } 


    generatePDF() 
    {   

        Connection.getEmployees().then( 
            (res) => 
            {   
                var doc = new jsPDF('p', 'pt');
                const jsonData=res.data 
                const formattedJson = JSON.stringify(jsonData, null, 2); // 2 is the number of spaces for indentation

                doc.setFont('helvetica');
            
                doc.text(20, 60, 'This is the content area:');
            
                // Add the formatted JSON to the PDF
                doc.setFontSize(12);
                doc.text(20, 80, formattedJson);
            
                doc.save('sample-file.pdf');

            }
        )
       
    }

    viewCourses() {
        this.props.history.push('/Admin/ViewCourses')
    }

    logOut() { 
              // Clear the entire local storage
        localStorage.clear();
        this.props.history.replace('/')
    } 

    addCourse() 
    {
        this.props.history.push('/Admin/AddCourse')
    } 

    editCourse()
    {
        this.props.history.push('/Admin/EditCourse')
    } 
    
    render() {
        return <div className="Learn">
            <div className="Learn-Header">

                <div className="Main-Header-Logo">

                    <img className="Main-Header-Logo-Image" src={LevelUp2}></img>
                </div>

                <div className="Main-Header-Title">
                    <h1 >Admin</h1>
                </div>

                <div className="Main-Header-Login">
                    <button onClick={() => { this.logOut() }}>LogOut</button>
                </div>
            </div>


            <div className="Course-Detail">

                <div className='Photo-Image-Div'>
                    <img className="Photo-Image-Admin" src={LevelUp2} ></img>
                </div>

                <div>
                    <div className="Course-Theory">

                        <div className='Course-Theory-Title-Profile'>

                            <div>
                                <h1>Level Up</h1>
                            </div>


                            {/* <h1>{this.state.project.projectName}</h1> */}
                            {/* {this.storedProject.projectName} */}
                        </div>

                        <div className='Course-Theory-Title-Admin'>


                            <button onClick={() => { this.viewCourses(); }}>View Courses</button>


                        </div>

                        <div className='Course-Theory-Title-Admin'>

                            <button  onClick={() => { this.addCourse(); }}> Add Course</button>
                        </div>

                        <div className='Course-Theory-Title-Admin'>
                            <button onClick={() => { this.editCourse(); }}>Edit Courses</button>
                        </div>

                        <div className='Course-Theory-Title-Admin'>
                            <button onClick={ () => {this.generatePDF()}}>Report</button>
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

export default Admin;