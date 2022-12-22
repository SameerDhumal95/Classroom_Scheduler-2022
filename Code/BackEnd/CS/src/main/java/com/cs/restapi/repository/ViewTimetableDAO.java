package com.cs.restapi.repository;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cs.restapi.entity.ViewTimetable;

public interface ViewTimetableDAO extends JpaRepository<ViewTimetable, Date>{
	
}
