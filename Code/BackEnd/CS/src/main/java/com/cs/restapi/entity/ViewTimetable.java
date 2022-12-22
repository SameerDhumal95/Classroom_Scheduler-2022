package com.cs.restapi.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "view_timetable")
public class ViewTimetable {
	@Id
	@Column
	Date date;
	
	@Column
	String subject_name;
	
	@Column
	String start_time;
	
	@Column
	String end_time;
	
	@Column
	String teacher_name;
	
	@Column
	int classcoordinator_id;

	public ViewTimetable() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ViewTimetable(Date date, String subject_name, String start_time, String end_time, String teacher_name,
			int classcoordinator_id) {
		super();
		this.date = date;
		this.subject_name = subject_name;
		this.start_time = start_time;
		this.end_time = end_time;
		this.teacher_name = teacher_name;
		this.classcoordinator_id = classcoordinator_id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getSubject_name() {
		return subject_name;
	}

	public void setSubject_name(String subject_name) {
		this.subject_name = subject_name;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}

	public String getTeacher_name() {
		return teacher_name;
	}

	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}

	public int getClasscoordinator_id() {
		return classcoordinator_id;
	}

	public void setClasscoordinator_id(int classcoordinator_id) {
		this.classcoordinator_id = classcoordinator_id;
	}

	
	
	
}
