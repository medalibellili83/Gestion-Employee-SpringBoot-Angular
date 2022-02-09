package com.example.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity //creation table dans db
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Long id;
	private String name;
	private String cin;
	@Column(unique=true)
	private String email;
	private String password;
	private String jobTitle;
	private String tache;
	private String datedebut;
	private String datefin;
	private String phone;
	private String imageUrl;
	private String role;
	@Column(nullable = false, updatable = false)
	private String emplyeeCode;
	
	public Employee() {
		super();
	}

	

	public Employee(Long id, String name, String cin, String email, String password, String jobTitle, String tache,
			String datedebut, String datefin, String phone, String imageUrl, String role, String emplyeeCode) {
		super();
		this.id = id;
		this.name = name;
		this.cin = cin;
		this.email = email;
		this.password = password;
		this.jobTitle = jobTitle;
		this.tache = tache;
		this.datedebut = datedebut;
		this.datefin = datefin;
		this.phone = phone;
		this.imageUrl = imageUrl;
		this.role = role;
		this.emplyeeCode = emplyeeCode;
	}






	public Employee(String name, String cin, String email, String password, String jobTitle, String tache,
			String datedebut, String datefin, String phone, String imageUrl, String role, String emplyeeCode) {
		super();
		this.name = name;
		this.cin = cin;
		this.email = email;
		this.password = password;
		this.jobTitle = jobTitle;
		this.tache = tache;
		this.datedebut = datedebut;
		this.datefin = datefin;
		this.phone = phone;
		this.imageUrl = imageUrl;
		this.role = role;
		this.emplyeeCode = emplyeeCode;
	}



	public Employee(Long id, String email, String password, String role) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public Employee(String email, String password, String role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getEmplyeeCode() {
		return emplyeeCode;
	}

	public void setEmplyeeCode(String emplyeeCode) {
		this.emplyeeCode = emplyeeCode;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}



	public String getTache() {
		return tache;
	}



	public void setTache(String tache) {
		this.tache = tache;
	}



	public String getDatedebut() {
		return datedebut;
	}



	public void setDatedebut(String datedebut) {
		this.datedebut = datedebut;
	}



	public String getDatefin() {
		return datefin;
	}



	public void setDatefin(String datefin) {
		this.datefin = datefin;
	}
	
	
	
	

}
