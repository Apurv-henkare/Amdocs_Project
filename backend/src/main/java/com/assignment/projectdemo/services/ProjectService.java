package com.assignment.projectdemo.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.projectdemo.entity.Employee;
import com.assignment.projectdemo.entity.Project;
import com.assignment.projectdemo.repo.EmployeeRepository;
import com.assignment.projectdemo.repo.ProjectRepository;

@Service
public class ProjectService {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private ProjectRepository projectRepository;

	public void saveProject(Project projectObj) {
		projectRepository.save(projectObj);
	}

	public List<Project> getProjectDetails(Long projectId) {
		if (null != projectId) {
			return projectRepository.findAllByProjectId(projectId);
		} else {
			return projectRepository.findAll();
		}
	}

	public void deleteProject(Long projectId) {
		projectRepository.deleteById(projectId);
	}
	
	
	
	//updated credithours
    public void updateProjectCreditHours(Long projectId, Long newCreditHours) {
        Project project = projectRepository.findById(projectId).orElse(null);
        if (project != null) {
            // Check if credit hours are increased or decreased
            Long oldCreditHours = project.getProjectCredit();
            Long creditHoursDiff = newCreditHours - oldCreditHours;

            // Update project credit hours
            project.setProjectCredit(newCreditHours);
            projectRepository.save(project);

            // Handle enrolled students
            if (creditHoursDiff > 0) {
                handleIncreasedCreditHours(project, oldCreditHours, creditHoursDiff);
            } else if (creditHoursDiff < 0) {
                handleDecreasedCreditHours(project, -creditHoursDiff);
            }
        }
    }

    private void handleIncreasedCreditHours(Project project, Long oldCreditHours,Long creditHoursDiff) {
        Set<Employee> enrolledEmployees = project.getEmployeeSet();
        for (Employee employee : enrolledEmployees) {
            // Check if the employee has sufficient credit hours
            if (employee.getCreditHours() >= creditHoursDiff) {
                // Deduct credit hours from the employee's balance
                employee.setCreditHours(employee.getCreditHours() - creditHoursDiff);
            } else {
                // Remove enrollment and refund credit hours to balance
                employee.getAssignedProjects().remove(project);
                employee.setCreditHours(employee.getCreditHours() + oldCreditHours);
            }
            employeeRepository.save(employee);
        }
    }

    private void handleDecreasedCreditHours(Project project, Long creditHoursDiff) {
        Set<Employee> enrolledEmployees = project.getEmployeeSet();
        for (Employee employee : enrolledEmployees) {
            // Add decreased credit hours to the employee's balance
            employee.setCreditHours(employee.getCreditHours() + creditHoursDiff);
            employeeRepository.save(employee);
        }
    }

}
