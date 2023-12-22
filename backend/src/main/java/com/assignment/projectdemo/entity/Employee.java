package com.assignment.projectdemo.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="employee")
public class Employee {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;
    private String empNam;  
    private String emailID;
    private String password;
    private Long mobileNo;
    private Long creditHours;
    
    
    
    
    public Employee(Long empId, String empNam, String emailID, String password, Long mobileNo, Long creditHours,
			Set<Project> assignedProjects) {
		super();
		this.empId = empId;
		this.empNam = empNam;
		this.emailID = emailID;
		this.password = password;
		this.mobileNo = mobileNo;
		this.creditHours = creditHours;
		this.assignedProjects = assignedProjects;
	}

	public String getEmailID() {
		return emailID;
	}

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(Long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public Long getCreditHours() {
		return creditHours;
	}

	public void setCreditHours(Long creditHours) {
		this.creditHours = creditHours;
	}

	@ManyToMany
    @JoinTable(name = "employee_project" ,
    		joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id")) 
    
    
    private Set<Project> assignedProjects = new HashSet<>();
    
    public Employee()
    {
    	
    }

	public Set<Project> getAssignedProjects() {
		return assignedProjects;
	}

	public void setAssignedProjects(Set<Project> assignedProjects) {
		this.assignedProjects = assignedProjects;
	}



	public Long getEmpId() {
		return empId;
	}

	public void setEmpId(Long empId) {
		this.empId = empId;
	}

	public String getEmpNam() {
		return empNam;
	}

	public void setEmpNam(String empNam) {
		this.empNam = empNam;
	}
}
