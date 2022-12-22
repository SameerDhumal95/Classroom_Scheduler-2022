package com.cs.restapi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.UniqueElements;

@Entity
@Table(name = "subject_info")
public class SubjectInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	int subject_id;
	
	@Column
	@NotEmpty(message = "Field cannot be null")
	String name;
	
	@Column
	@NotNull(message = "Field cannot be null")
	int duration;
	
	@Column
	int classcoordinator_id;

	public SubjectInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SubjectInfo(int subject_id, @NotEmpty(message = "Field cannot be null") String name,
			@NotEmpty(message = "Field cannot be null") int duration, int classcoordinator_id) {
		super();
		this.subject_id = subject_id;
		this.name = name;
		this.duration = duration;
		this.classcoordinator_id = classcoordinator_id;
	}

	public int getSubject_id() {
		return subject_id;
	}

	public void setSubject_id(int subject_id) {
		this.subject_id = subject_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public int getClasscoordinator_id() {
		return classcoordinator_id;
	}

	public void setClasscoordinator_id(int classcoordinator_id) {
		this.classcoordinator_id = classcoordinator_id;
	}

	
	
}
