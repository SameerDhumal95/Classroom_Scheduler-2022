package com.cs.restapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cs.restapi.entity.Students;
import com.cs.restapi.entity.Teachers;


public interface StudentsDAO extends JpaRepository<Students, Integer> {
	
	@Query("SELECT u FROM Students u WHERE u.classcoordinator_id = ?1")
	public List<Students> findByClasscoordinator_id(int classcoordinator_id);
	
	
	@Query("SELECT u FROM Students u WHERE u.username = ?1 and u.password = ?2")
	public Students findByUsernamePassword(String username,String password);
	
	@Query("SELECT count(*) FROM Students u WHERE u.classcoordinator_id = ?1")
	public 	int countOfStudent(int classcoordinator_id);
}
