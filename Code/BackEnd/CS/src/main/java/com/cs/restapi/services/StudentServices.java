package com.cs.restapi.services;

import java.util.List;

import com.cs.restapi.entity.Students;

public interface StudentServices {
	
	public List<Students> getStudents();
	
	public Students getStudent(int student_id);
	
	public Students addStudent(Students cc);
	
	public Students updateStudent(Students cc);
	
	public Students deleteStudent(int student_id);
	
	public List<Students> getStudentsByClassCoordinator(int classcoordinator_id);
	
	public Students getByUsernameAndPassword(String username,String password);
	
	public int getStudentCount(int classcoordinator_id);
}
