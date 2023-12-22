import React, { Component } from 'react';
import ReactDom from 'react-dom/client';  

import { Route,Switch } from 'react-router-dom';
import Main from './Components/Main' 
import NewAccount from './Components/NewAccount'; 

import Login from './Components/Login'; 
import Learn from './Components/Learn'
import Levelup from './Components/Levelup'; 
import CourseDetail from './Components/CourseDetail';
import MyCourse from './Components/MyCourse'; 
import Profile from './Components/Profile'; 
import Admin from './Components/Admin'
import ViewCourse from './Components/ViewCourses'; 
import AddCourse from './Components/AddCourse'; 
import EditCourse from './Components/EditCourse';

function App() {
  return (
    <div className='BG'> 
    
       <Switch> 
                          <Route exact path = "/" component = {Main}></Route>
                          <Route exact path ="/NewAccount" component = {NewAccount}></Route> 
                          <Route exact path ="/Login" component = {Login}></Route> 
                          <Route exact path ="/Learn" component = {Learn}></Route> 
                          <Route exact path ="/Levelup" component = {Levelup}></Route> 
                          <Route exact path ="/Levelup/CourseDetail" component = {CourseDetail}></Route> 
                          <Route exact path ="/Levelup/MyProfile" component = {Profile}></Route>  
                          <Route exact path ="/Levelup/MyProfile/MyCourse" component = {MyCourse}></Route> 
                          <Route exact path ="/Admin" component = {Admin}></Route> 
                          <Route exact path ="/Admin/ViewCourses" component = {ViewCourse}></Route> 
                          <Route exact path ="/Admin/AddCourse" component = {AddCourse}></Route> 
                          <Route exact path ="/Admin/EditCourse" component = {EditCourse}></Route>     
                           
        </Switch> 
        
    </div>
  );
}

export default App;
