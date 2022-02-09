package com.example.project.service;
import java.util.UUID;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.exception.UserNotFoundException;
import com.example.project.model.Employee;
import com.example.project.repo.EmployeeRepo;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepo employeeRepo;

	public Employee login(String email , String password) {
		Employee emp = employeeRepo.findByEmail(email);
		if(emp != null) {
			if(emp.getPassword().equals(password)) {
				return emp ;
			}
		}
		return null ;
	}
	
	public Employee find(Long id) {
		Employee emp = employeeRepo.findById(id).orElse(null);
		return emp ;
	}
	
	//crud
	
	public Employee addEmployee(Employee employee) {
		employee.setEmplyeeCode(UUID.randomUUID().toString());
		return employeeRepo.save(employee);
	}
	
	public List<Employee> findAllEmployees(){
		return employeeRepo.findAll();
	}
	
	public Employee updateEmployee(Employee employee) {
		return employeeRepo.save(employee);
	}
	
	public Employee findEmployeeById(Long id) {
		return employeeRepo.findEmployeeById(id)
				.orElseThrow(()-> new UserNotFoundException("User by id "+ id + " was not found"));
	}
	
	public void deleteEmployee(Long id) {
		employeeRepo.deleteById(id);
		
	}
}
