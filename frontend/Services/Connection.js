import React, { Component } from 'react'; 
import ReactDom from 'react-dom/client';  

import axios from 'axios';



const EMPLOYEE_API_BASE_URL = "http://localhost:9191/employee"  

const PROJECT_API_BASE_URL = "http://localhost:9191/project"      


class Connection 
{
    getEmployees()
    {
        return axios.get(EMPLOYEE_API_BASE_URL+'/getEmployees');
    }   

    getEmployeeById(id)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+id)
    } 

    getProjectById(id)
    {
        return axios.get(PROJECT_API_BASE_URL+'/'+id)
    }

    getProjects()
    {
        return axios.get(PROJECT_API_BASE_URL+'/getProjects');
    }

    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_API_BASE_URL+'/save',employee);
    }   

    createProject(project) 
    {
        return axios.post(PROJECT_API_BASE_URL+'/save',project)
    }

    loginCredentials(data)
    {
        return axios.post(EMPLOYEE_API_BASE_URL+'/login',data)
    }  

    addProjectToEmployee(empID,ProjectID) 
    {
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+empID+'/project/'+ProjectID);
    }  

    updateCreditHours(ProjectID,creditHr)
    {
        return axios.put(PROJECT_API_BASE_URL+'/'+ProjectID+'/updateCreditHours/'+creditHr)
    }

    deleteProjectFromEmployee(empID,ProjectID)
    {
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+empID+'/project/'+ProjectID)
    }
} 

export default new Connection()