package com.cs.restapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cs.restapi.entity.Timetable;

public interface TimetableDAO extends JpaRepository<Timetable, Integer>{
	
	@Query("SELECT u FROM Timetable u WHERE u.classcoordinator_id = ?1")
	public List<Timetable> findByClasscoordinator_id(int classcoordinator_id);
}
