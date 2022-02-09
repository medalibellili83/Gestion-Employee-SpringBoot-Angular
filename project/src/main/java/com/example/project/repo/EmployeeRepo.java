package com.example.project.repo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long>{
	Employee findByEmail(String email);
	void deleteById(Long id);

	Optional<Employee> findEmployeeById(Long id);
	
}