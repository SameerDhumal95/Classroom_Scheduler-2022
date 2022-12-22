package com.cs.restapi.entity;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;



@Entity
@Table(name = "classcoordinator_info")
public class ClassCoordinator{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	int classcoordinator_id;
	
	@Column
	@NotEmpty(message = "Field must not be null")
	String first_name;
	
	@Column
	String middle_name;
	
	@Column
	String last_name;
	
	@Column
	Blob photo;
	
	@Column
	@NotEmpty(message = "Field must not be null")
	String institute_name;
	
	@Column(unique = true)
	@NotEmpty(message = "Field must not be null")
	String username;
	
	@Column
	@Size(min = 4,max = 10,message = "Password must be more than 4 and less than 10 charcters")
	String password;
	
	@Column(unique = true)
	@Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", message = "Please input proper format")
	@NotEmpty(message = "Field must not be null")
	String email_id;
	
	@Column
	@Pattern(regexp = "^$|[0-9]{10}",message = "Please input proper format")
	@NotEmpty(message = "Field must not be null")
	String phone;

	public ClassCoordinator() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public ClassCoordinator(int classcoordinator_id, String first_name, String middle_name, String last_name,
			Blob photo, String institute_name, String username, String password, String email_id, String phone) {
		super();
		this.classcoordinator_id = classcoordinator_id;
		this.first_name = first_name;
		this.middle_name = middle_name;
		this.last_name = last_name;
		this.photo = photo;
		this.institute_name = institute_name;
		this.username = username;
		this.password = password;
		this.email_id = email_id;
		this.phone = phone;
	}



	public int getClasscoordinator_id() {
		return classcoordinator_id;
	}

	public void setClasscoordinator_id(int classcoordinator_id) {
		this.classcoordinator_id = classcoordinator_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getMiddle_name() {
		return middle_name;
	}

	public void setMiddle_name(String middle_name) {
		this.middle_name = middle_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Blob getPhoto() {
		return photo;
	}

	public void setPhoto(Blob photo) {
		this.photo = photo;
	}

	public String getInstitute_name() {
		return institute_name;
	}

	public void setInstitute_name(String institute_name) {
		this.institute_name = institute_name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	
}
