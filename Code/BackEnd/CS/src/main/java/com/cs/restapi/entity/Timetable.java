package com.cs.restapi.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "timetable")
public class Timetable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	int timetable_id;
	
	@Column
	@NotEmpty(message = "Field must not be null")
	String subject_name;
	
	@Column
	@NotEmpty(message = "Field must not be null")
	String teacher_name;
	
	@Column
	@NotEmpty(message = "Field must not be null")
	String start_time;
	
	@Column
	@NotEmpty(message = "Field must not be null")
	String end_time;
	
	@Column
	int classcoordinator_id;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column
	Date date;

	public Timetable() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Timetable(int timetable_id, @NotEmpty(message = "Field must not be null") String subject_name,
			@NotEmpty(message = "Field must not be null") String teacher_name,
			@NotEmpty(message = "Field must not be null") String start_time,
			@NotEmpty(message = "Field must not be null") String end_time, int classcoordinator_id, Date date) {
		super();
		this.timetable_id = timetable_id;
		this.subject_name = subject_name;
		this.teacher_name = teacher_name;
		this.start_time = start_time;
		this.end_time = end_time;
		this.classcoordinator_id = classcoordinator_id;
		this.date = date;
	}

	public int getTimetable_id() {
		return timetable_id;
	}

	public void setTimetable_id(int timetable_id) {
		this.timetable_id = timetable_id;
	}

	public String getSubject_name() {
		return subject_name;
	}

	public void setSubject_name(String subject_name) {
		this.subject_name = subject_name;
	}

	public String getTeacher_name() {
		return teacher_name;
	}

	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
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

	public int getClasscoordinator_id() {
		return classcoordinator_id;
	}

	public void setClasscoordinator_id(int classcoordinator_id) {
		this.classcoordinator_id = classcoordinator_id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
		
}
