package com.example.demo.repository;

import com.example.demo.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;

public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
    ProjectTask getById(Long id);
}
