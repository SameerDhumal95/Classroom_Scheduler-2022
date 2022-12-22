package com.cs.restapi.entity;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teacher_info")
public class Teachers {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	int teacher_id;
	
	@Column
	String first_name;
	
	@Column
	String middle_name;
	
	@Column
	String last_name;
	
	@Column
	Blob photo;
	
	@Column
	String username;
	
	@Column
	String password;
	
	@Column
	String email_id;
	
	@Column
	long phone;
	
	@Column
	int classcoordinator_id;

	public Teachers() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Teachers(int teacher_id, String first_name, String middle_name, String last_name, Blob photo,
			String username, String password, String email_id, long phone, int classcoordinator_id) {
		super();
		this.teacher_id = teacher_id;
		this.first_name = first_name;
		this.middle_name = middle_name;
		this.last_name = last_name;
		this.photo = photo;
		this.username = username;
		this.password = password;
		this.email_id = email_id;
		this.phone = phone;
		this.classcoordinator_id = classcoordinator_id;
	}

	public int getTeacher_id() {
		return teacher_id;
	}

	public void setTeacher_id(int teacher_id) {
		this.teacher_id = teacher_id;
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

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public int getClasscoordinator_id() {
		return classcoordinator_id;
	}

	public void setClasscoordinator_id(int classcoordinator_id) {
		this.classcoordinator_id = classcoordinator_id;
	}
	
	
}
