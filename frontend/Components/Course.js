import React, { Component } from 'react';   


import LevelUp from '../Images/LevelUp.png' 
import Jackson from '../Images/Lord_Music.jpg' 
import Swimming from '../Images/Swimming.webp' 
import Driving from '../Images/Driving.jpg' 
import Cooking from '../Images/Cooking.jpg' 
import Writing from '../Images/writing.png' 


class Course extends Component 
{
    constructor(props)
    {
        super(props);  
        this.arr= [Jackson,Swimming,Driving,Cooking,Writing];
    } 

    componentDidMount()
    {   
        console.log("You");
        console.log(this.props.post); 
         console.log(this.props.id);
        
    }

    render()
    {
       return   this.props.id < 5 ?
                (<div className="Photo"> 
                    <div className="Photo-Space">
                            <img className="Photo-Image" src={this.arr[this.props.id]} ></img>
                    </div> 

                    <div className="Photo-Des">
                        <p>{this.props.post.projectDescription}</p>
                    </div>
                    
              </div>) : null;
    }
} 

export default Course