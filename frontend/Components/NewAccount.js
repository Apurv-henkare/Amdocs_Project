import React, { Component } from 'react'; 
import ReactDom from 'react-dom/client'; 

import Connection from '../Services/Connection';

class NewAccount extends Component 
{

    constructor(props)
    {
        super(props); 

        this.state = { 
            error:null,
            error_email: null,
            error_password: null
        }; 

        
      this.handleSubmit=this.handleSubmit.bind(this);
        
    }  

    handleSubmit(event)
    {
        event.preventDefault();  
        const name = event.target.elements.Name.value;
        const email = event.target.elements.EmailID.value;
        const password = event.target.elements.Password.value;
        const mobile = event.target.elements.MobileNo.value; 
        const credit = 100;  

            // Check password strength before submitting the form
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
        const isStrongPassword = passwordRegex.test(password);


         // Validate email using a regular expression
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(email)) {
             // alert('Please enter a valid email address.'); 
             this.setState({ error_email: 'Please enter a valid email address.' });
             return;
         } 

         
        if (!isStrongPassword) {
            this.setState({
                error_password: 'Weak Password.',
            });
            return;
        } 


        const record = 
        {
            empNam:name,
            emailID:email,
            password:password,
            mobileNo:mobile,
            creditHours:credit
        }  

        
        console.log(record);  

        Connection.createEmployee(record).then( 
            res => { 
                this.props.history.replace('/')
            }
        ) .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                this.setState({ error: `Error: ${error.response.data}` });
            } else if (error.request) {
                // The request was made but no response was received
                this.setState({ error: 'No response received.' });
            } else {
                // Something happened in setting up the request that triggered an Error
                this.setState({ error: `Error: ${error.message}` });
            }
        })

    }

    render() 
    {

        return <div className="Register"> 

                    <div className="Register-Header">
                         <h1> Register</h1>
                    </div>

                    <div className="Register-Detail" > 
                        
                        <form className="Register-Detail-Form"  onSubmit={this.handleSubmit}>

                            <div className = "Register-Detail-Form-Grid">
                                    <div>
                                        Name:
                                    </div> 
                                    <input placeholder = "Name" name="Name"></input>
                            </div> 

                            <div className = "Register-Detail-Form-Grid">
                                    <div>
                                        EmailID:
                                    </div> 
                                    <input placeholder = "EmailID" name="EmailID"></input>
                            </div>  

                            {this.state.error_email && ( 
                            <div className='Register-Detail-Form-Grid'>
                                <div style={{ color: 'red',fontSize:'15px'}}>
                                    Error:
                                </div>
                                <div style={{ color: 'red',fontSize:'15px'}}>
                                            {this.state.error_email}
                                </div> 
                            </div>
                                )}

                            <div className = "Register-Detail-Form-Grid">
                                    <div>
                                        Password:
                                    </div> 
                                    <input placeholder = "password" name="Password" type="password"></input>
                            </div> 

                             {this.state.error_password && ( 
                            <div className='Register-Detail-Form-Grid'>
                                <div style={{ color: 'red',fontSize:'15px'}}>
                                    Error:
                                </div>
                                <div style={{ color: 'red',fontSize:'15px'}}>
                                            {this.state.error_password}
                                </div> 
                            </div>
                                )} 

                            <div className = "Register-Detail-Form-Grid">
                                    <div>
                                        MobileNo:
                                    </div> 
                                    <input placeholder = "MobileNo" name="MobileNo"></input>
                            </div> 

                            {this.state.error && (
                                    <div style={{ color: 'red', marginBottom: '10px' }}>
                                        {this.state.error}
                                    </div>
                                )}

                            <div className ="Register-Detail-Form-Grid2">
                                <button >Submit</button>
                      
                            </div>
                        </form>  
                    </div>  

                    
                    <div className="Main-Footer">
                        Footer
                    </div> 
                    
              </div>
    }
} 


export default NewAccount