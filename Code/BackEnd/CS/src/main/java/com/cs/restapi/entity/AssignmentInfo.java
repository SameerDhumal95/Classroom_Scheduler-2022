package com.cs.restapi.entity;

import java.sql.Blob;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "assignment_info")
public class AssignmentInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	int assignment_id;
	
	@Column
	String name;
	
	@Column
	Blob file;
	
	@Column
	Date assign_date;
	
	@Column
	Date submission_date;
	
	@Column
	int subject_id;
	
	@Column
	int teacher_id;
	
	public AssignmentInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AssignmentInfo(int assignment_id, String name, Blob file, Date assign_date, Date submission_date,
			int subject_id, int teacher_id) {
		super();
		this.assignment_id = assignment_id;
		this.name = name;
		this.file = file;
		this.assign_date = assign_date;
		this.submission_date = submission_date;
		this.subject_id = subject_id;
		this.teacher_id = teacher_id;
	}

	public int getAssignment_id() {
		return assignment_id;
	}

	public void setAssignment_id(int assignment_id) {
		this.assignment_id = assignment_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Blob getFile() {
		return file;
	}

	public void setFile(Blob file) {
		this.file = file;
	}

	public Date getAssign_date() {
		return assign_date;
	}

	public void setAssign_date(Date assign_date) {
		this.assign_date = assign_date;
	}

	public Date getSubmission_date() {
		return submission_date;
	}

	public void setSubmission_date(Date submission_date) {
		this.submission_date = submission_date;
	}

	public int getSubject_id() {
		return subject_id;
	}

	public void setSubject_id(int subject_id) {
		this.subject_id = subject_id;
	}

	public int getTeacher_id() {
		return teacher_id;
	}

	public void setTeacher_id(int teacher_id) {
		this.teacher_id = teacher_id;
	}
	
}
