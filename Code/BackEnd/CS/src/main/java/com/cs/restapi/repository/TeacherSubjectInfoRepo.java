package com.cs.restapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cs.restapi.entity.TeacherSubjectInfo;

public interface TeacherSubjectInfoRepo extends JpaRepository<TeacherSubjectInfo, Integer> {
	
}
