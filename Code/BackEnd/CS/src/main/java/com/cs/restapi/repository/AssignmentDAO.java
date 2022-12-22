package com.cs.restapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cs.restapi.entity.AssignmentInfo;

public interface AssignmentDAO extends JpaRepository<AssignmentInfo, Integer> {
	
	@Query("SELECT a from AssignmentInfo a WHERE a.teacher_id = ?1")
	public List<AssignmentInfo> findAssignmentByTeacher(int teacher_id);
}
