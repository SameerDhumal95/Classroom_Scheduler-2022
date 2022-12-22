package com.cs.restapi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teacher_subject_info")
public class TeacherSubjectInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	int teacher_subject_id;
	
	@Column
	int teacher_id;
	
	@Column
	int subject_id;
	
	public TeacherSubjectInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TeacherSubjectInfo(int teacher_subject_id, int teacher_id, int subject_id) {
		super();
		this.teacher_subject_id = teacher_subject_id;
		this.teacher_id = teacher_id;
		this.subject_id = subject_id;
	}

	public int getTeacher_subject_id() {
		return teacher_subject_id;
	}
	
	public void setTeacher_subject_id(int teacher_subject_id) {
		this.teacher_subject_id = teacher_subject_id;
	}
	
	public int getTeacher_id() {
		return teacher_id;
	}
	
	public void setTeacher_id(int teacher_id) {
		this.teacher_id = teacher_id;
	}
	
	public int getSubject_id() {
		return subject_id;
	}
	
	public void setSubject_id(int subject_id) {
		this.subject_id = subject_id;
	}
	
	
}
