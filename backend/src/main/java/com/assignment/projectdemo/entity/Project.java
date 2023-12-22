package com.assignment.projectdemo.entity;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;
    private String projectName; 
    private Long projectCredit;
    private String projectAuthor;
    private String projectDescription;
    private Long projectStatus;
    
    
    @ManyToMany(mappedBy = "assignedProjects") 
    @JsonIgnore
    private Set<Employee> employeeSet = new HashSet<>();
    
    public Project()
    {
    	
    }

	

	public Long getProjectCredit() {
		return projectCredit;
	}



	public void setProjectCredit(Long projectCredit) {
		this.projectCredit = projectCredit;
	}



	public String getProjectAuthor() {
		return projectAuthor;
	}



	public void setProjectAuthor(String projectAuthor) {
		this.projectAuthor = projectAuthor;
	}



	public String getProjectDescription() {
		return projectDescription;
	}



	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}



	public Long getProjectStatus() {
		return projectStatus;
	}



	public void setProjectStatus(Long projectStatus) {
		this.projectStatus = projectStatus;
	}



	public Project(Long projectId, String projectName, Long projectCredit, String projectAuthor,
			String projectDescription, Long projectStatus, Set<Employee> employeeSet) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.projectCredit = projectCredit;
		this.projectAuthor = projectAuthor;
		this.projectDescription = projectDescription;
		this.projectStatus = projectStatus;
		this.employeeSet = employeeSet;
	}



	public Set<Employee> getEmployeeSet() {
		return employeeSet;
	}

	public void setEmployeeSet(Set<Employee> employeeSet) {
		this.employeeSet = employeeSet;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	
}
