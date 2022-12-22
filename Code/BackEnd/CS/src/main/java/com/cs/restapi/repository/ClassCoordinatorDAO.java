package com.cs.restapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cs.restapi.entity.ClassCoordinator;

public interface ClassCoordinatorDAO extends JpaRepository<ClassCoordinator, Integer> {
	
	@Query("SELECT u FROM ClassCoordinator u WHERE u.username = ?1 and u.password = ?2")
	public ClassCoordinator findByUsernamePassword(String username,String password);
}
