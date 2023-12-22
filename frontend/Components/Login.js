import React, { Component } from 'react'; 
import ReactDom from 'react-dom/client';  

import Connection from '../Services/Connection';

class Login extends Component 
{

    constructor(props)
    {
        super(props);  

        this.state = {
            error: null,
          };
        this.handleSubmit=this.handleSubmit.bind(this);
    }   

    componentDidMount()
    {   
         
    } 

    handleSubmit(event)
    {
        event.preventDefault();   
        const email = event.target.elements.Email.value;
        const password = event.target.elements.Password.value; 

        const record = 
        { 
            email:email,
            password:password
        } 

        
        Connection.loginCredentials(record).then( 
            res => { 
                // this.props.history.replace('/') 
                console.log(res.data) 
                const access = res.data; 

                if(access === -1) 
                {
                    this.props.history.push('/Admin') 
                }

                else 
                {
                    this.props.history.push ( 
                        { pathname:'/Levelup',
                        id:res.data}
                    ) 
                }

                console.log(res.data)
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
                        <h1> Login </h1>
                    </div>

                    <div className="Register-Detail" >
                        <form className="Register-Detail-Form" onSubmit={this.handleSubmit}>

                            <div className = "Register-Detail-Form-Grid">
                                    <div>
                                        EmailID:
                                    </div> 
                                    <input placeholder = "Email" name="Email"></input>
                            </div> 

                            <div className = "Register-Detail-Form-Grid">
                                    <div>
                                        Password:
                                    </div> 
                                    <input placeholder = "Password" name="Password" type="password"></input>
                            </div>    

                            {this.state.error && (
                                <div className="error-message">
                                <p style={{ color: 'red', marginTop: '10px'}}>{this.state.error}</p>
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


export default Login