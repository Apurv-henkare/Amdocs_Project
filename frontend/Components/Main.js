import React, { Component } from 'react';
import ReactDom from 'react-dom/client';  

import LevelUp from '../Images/LevelUp.png'
import Course from '../Images/course.png'

import NewAccount from './NewAccount';
import Login from './Login'; 

import Connection from '../Services/Connection';


import { Link } from 'react-router-dom';


class Main extends Component { 


    constructor(props)
    {
        super(props) 

        this.registerAccount=this.registerAccount.bind(this); 
        this.Login=this.Login.bind(this); 
        this.Learn=this.Learn.bind(this); 

        const arr = { dancing:"dnacing bro"}; 

        const temp= "dancing"; 
        
        console.log(arr["dancing"])
        console.log(arr[temp])
    } 

    componentDidMount()
    {
          Connection.getEmployees().then( 
            (res) => { 
                console.log(res.data)
            }
          )
    }  

    registerAccount() 
    {
        this.props.history.push('/NewAccount')
    } 

    Login() 
    {
        this.props.history.push('/Login')
    } 

    Learn()
    {
        this.props.history.push('/Learn')
    }


    
    
    render() {

        return <div className="Main">
                     
                    <div className="Main-Header">
                        <div className="Main-Header-Logo">
                             
                                <img className ="Main-Header-Logo-Image" src={LevelUp}></img>        
                        </div> 

                        <div className="Main-Header-Title"> 
                            <h1 >Level Up</h1>
                        </div>

                        <div  className="Main-Header-Login">
                            <button onClick ={ () => {this.Login()} }> Login</button>
                        </div>
                    </div>

                    <div className="Main-Middle">

                        <div className="Main-Middle-Info">
                            Learn From Your Home Today !!
                        </div>

                        <div className="Main-Middle-Account-Info">
                            <div className="Main-Middle-Account-Info-P">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam hendrerit augue ut lacus vehicula, vel convallis sapien efficitur. Ut pretium cursus velit, eu suscipit odio dapibus a.
                                
                            </div>

                            <div className="Main-Middle-Account-Info-Button">
                                <div>
                                    <button onClick ={ () => {this.Learn()} }>Learn More</button>
                                </div>
                            </div>
        
                        </div>

                        <div className="Main-Middle-Account">

                            {/* <div className = "Main-Middle-Account-Header"> 
                                <div>
                                    No account Yet
                                </div>

                                <div> 
                                     circles
                                </div>
                            </div>  */}

                            <div className = "Main-Middle-Account-Info">

                                <div className="Main-Middle-Account-Info-P">
                                    
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    {/* Nullam hendrerit augue ut lacus vehicula, vel convallis sapien efficitur. Ut pretium cursus velit, eu suscipit odio dapibus a.  */}
                                    
                                </div>

                                
                                <div className= "Main-Middle-Account-Info-Button"> 
                                        <div>
                                            <button onClick={ () => this.registerAccount()} > Register account</button>
                                        </div>
                                </div>
                                

                            </div> 
                        </div>

                    </div> 

                    {/* <Link className='addIcon' to="/NewAccount">Click for new Employee</Link> */}

                    <div className="Main-Footer">
                        Footer
                    </div> 
                 


                </div>
    }

}

export default Main