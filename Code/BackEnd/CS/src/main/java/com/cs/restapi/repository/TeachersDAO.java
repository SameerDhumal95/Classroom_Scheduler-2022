package com.cs.restapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cs.restapi.entity.Students;
import com.cs.restapi.entity.Teachers;

public interface TeachersDAO extends JpaRepository<Teachers, Integer>{
	
	@Query("SELECT u FROM Teachers u WHERE u.classcoordinator_id = ?1")
	public List<Teachers> findByClasscoordinator_id(int classcoordinator_id);
	
	@Query("SELECT u FROM Teachers u WHERE u.username = ?1 and u.password = ?2")
	public Teachers findByUsernamePassword(String username,String password);
	
	@Query("SELECT count(*) FROM Teachers u WHERE u.classcoordinator_id = ?1")
	public 	int countOfTeacher(int classcoordinator_id);
}
