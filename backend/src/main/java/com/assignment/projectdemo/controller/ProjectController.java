package com.assignment.projectdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.projectdemo.entity.Project;
import com.assignment.projectdemo.services.ProjectService;

@CrossOrigin(origins = "http://localhost:6600")
@RestController
@RequestMapping("/project")
public class ProjectController {
	
	   @Autowired
	    private ProjectService projectService;

	    @PostMapping("/save")
	    public ResponseEntity createProject(@RequestBody Project projectObj) {
	        projectService.saveProject(projectObj);
	        return new ResponseEntity(HttpStatus.CREATED);
	    }

	    @GetMapping(value = {"/getProjects", "/{projectId}"})
	    public List<Project> getProjects(@PathVariable(required = false) Long projectId) {
	        return projectService.getProjectDetails(projectId);
	    }

	    @DeleteMapping("/delete/{projectId}")
	    public ResponseEntity removeProject(@PathVariable Long projectId) {
	        projectService.deleteProject(projectId);
	        return new ResponseEntity(HttpStatus.OK);
	    }
	    
	    @PutMapping("/{projectId}/updateCreditHours/{newCreditHours}")
	    public ResponseEntity<?> updateProjectCreditHours(
	            @PathVariable Long projectId,
	            @PathVariable Long newCreditHours) {
	        projectService.updateProjectCreditHours(projectId, newCreditHours);
	        return new ResponseEntity<>("Project credit hours updated successfully", HttpStatus.OK);
	    }
}
