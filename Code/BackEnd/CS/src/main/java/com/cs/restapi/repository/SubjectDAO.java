package com.cs.restapi.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cs.restapi.entity.SubjectInfo;

public interface SubjectDAO extends JpaRepository<SubjectInfo, Integer>{
	
	@Query("SELECT u FROM SubjectInfo u WHERE u.classcoordinator_id = ?1")
	public List<SubjectInfo> findByClassCoordinator(int classcoordinator_id);
	
	@Query("SELECT count(*) FROM SubjectInfo u WHERE u.classcoordinator_id = ?1")
	public 	int countOfSubject(int classcoordinator_id);
}
