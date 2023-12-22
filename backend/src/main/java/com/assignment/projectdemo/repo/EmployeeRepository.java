package com.assignment.projectdemo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.projectdemo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
    List<Employee> findAllByEmpId(Long empId);
    boolean existsByEmailID(String email);
	Employee findByEmailIDAndPassword(String email, String password);

}
