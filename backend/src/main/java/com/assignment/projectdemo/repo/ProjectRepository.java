package com.assignment.projectdemo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.projectdemo.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{
    List<Project> findAllByProjectId(long projectId);

}
