import React, { Component } from 'react'; 

import LevelUp from '../Images/LevelUp.png'  
import More from '../Images/More.png'

import Connection from '../Services/Connection'; 

import Course from './Course' 




class Learn extends Component
{
    constructor(props)
    {
        super(props); 

        this.state = { 
             
            project:[]
        } 

        // project=[]; 
        this.back=this.back.bind(this);


    }  

    componentDidMount()
    {
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

                        <div  className="Main-Header-Login">
                            <button onClick ={ () => {this.back()} }>Back</button>
                        </div>
                    </div> 

                    {/* <div className="Main-Footer">
                        Footer
                    </div>  */}  


                    <div className='video-grid'>

                        {this.state.project.map((course,index) => <Course key={index} post={course} id={index} />)} 

                        <div className="Photo"> 
                            <div className="Photo-Space">
                                <img className="Photo-Image" src={More}></img>
                            </div> 
    
                            <div className="Photo-Des">
                                <p>
                               Explore numerous courses Discover more. Log in for expanded learning. New? Register on the main page for access</p> 
                            </div> 
                        </div>
                    </div>  

                </div>
    }
} 

export default Learn