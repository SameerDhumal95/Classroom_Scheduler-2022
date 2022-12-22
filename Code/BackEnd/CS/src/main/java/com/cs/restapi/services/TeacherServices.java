package com.cs.restapi.services;

import java.util.List;

import com.cs.restapi.entity.Teachers;

public interface TeacherServices {
	
	public List<Teachers> getTeachers();
	
	public Teachers getTeacher(int teacher_id);
	
	public Teachers addTeacher(Teachers teacher);
	
	public Teachers updateTeacher(Teachers teacher);
	
	public Teachers deleteTeacher(int teacher_id);
	
	public List<Teachers> getTeacherByClassCoordinator(int classcoordinator_id);
	
	public Teachers getByUsernamePassword(String username,String password);
	
	public int getTeacherCount(int classcoordinator_id);
}
