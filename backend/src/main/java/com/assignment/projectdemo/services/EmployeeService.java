package com.assignment.projectdemo.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.assignment.projectdemo.entity.Employee;
import com.assignment.projectdemo.entity.Project;
import com.assignment.projectdemo.repo.EmployeeRepository;
import com.assignment.projectdemo.repo.ProjectRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private ProjectRepository projectRepository;

	public void saveEmployee(Employee empObj) {
		employeeRepository.save(empObj);
	}

	public List<Employee> getEmployeeDetails(Long empId) {
		if (null != empId) {
			return employeeRepository.findAllByEmpId(empId);
		} else {
			return employeeRepository.findAll();
		}
	}
	
	public Long loginEmployee(String email, String password) {
		Employee employee = employeeRepository.findByEmailIDAndPassword(email, password);
		return (employee != null) ? employee.getEmpId() :null;
	}

	public boolean existsByEmail(String email) {
		return employeeRepository.existsByEmailID(email);
	}

	public void deleteEmployee(Long empId) {
		employeeRepository.deleteById(empId);
	}
	
    public void deleteProjectFromEmployee(Long empId, Long projectId) {
        Employee employee = employeeRepository.findById(empId).orElse(null);
        Project project = projectRepository.findById(projectId).orElse(null);

        if (employee != null && project != null) {
            Set<Project> assignedProjects = employee.getAssignedProjects();
            assignedProjects.remove(project);
            employee.setAssignedProjects(assignedProjects);
            employeeRepository.save(employee);
        }
    }
    

	
//  Set<Project> projectSet = null;
//  Employee employee = employeeRepository.findById(empId).get();
//  Project project = projectRepository.findById(projectId).get();
//  projectSet =  employee.getAssignedProjects();
//  projectSet.add(project);
//  employee.setAssignedProjects(projectSet);
//  return employeeRepository.save(employee);

	public ResponseEntity<?> assignProjectToEmployee(Long empId, Long projectId) {

		Employee employee = employeeRepository.findById(empId).orElse(null);
		Project project = projectRepository.findById(projectId).orElse(null);

		if (employee != null && project != null) {
			Set<Project> projectSet = employee.getAssignedProjects();

			
			if (!projectSet.contains(project)) {
				// Check if the employee has enough creditHours for the project
				if (employee.getCreditHours() >= project.getProjectCredit()) {
					// Decrease creditHours by project credit
					employee.setCreditHours(employee.getCreditHours() - project.getProjectCredit());
				
					project.setProjectStatus((long)(Math.random()*(100-20+1)+20));
					// Add project to the assignedProjects set 
					projectSet.add(project);
					employee.setAssignedProjects(projectSet);

					// Save the updated employee
					employeeRepository.save(employee);
					return new ResponseEntity<>("Project assigned successfully", HttpStatus.OK);
				} else {
					return new ResponseEntity<>("Insufficient creditHours for the project", HttpStatus.BAD_REQUEST);
				}
			} else {
				return new ResponseEntity<>("Project is already assigned to the employee", HttpStatus.BAD_REQUEST);
			}

		} else {
			return new ResponseEntity<>("Employee or Project not found", HttpStatus.BAD_REQUEST);
		}
	}
}
