package com.cs.restapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.restapi.entity.Teachers;
import com.cs.restapi.repository.TeachersDAO;

@Service
public class TeacherImpl implements TeacherServices {

	@Autowired
	private TeachersDAO teacherRepo;
	
	@Override
	public List<Teachers> getTeachers() {
		return teacherRepo.findAll();
	}

	@Override
	public Teachers getTeacher(int teacher_id) {
		return teacherRepo.findById(teacher_id).get();
	}

	@Override
	public Teachers addTeacher(Teachers teacher) {
		teacherRepo.save(teacher);
		return teacher;
	}

	@Override
	public Teachers updateTeacher(Teachers teacher) {
		teacherRepo.save(teacher);
		return teacher;
	}

	@Override
	public Teachers deleteTeacher(int teacher_id) {
		Teachers teacher=this.getTeacher(teacher_id);
		teacherRepo.delete(teacher);
		return teacher;
	}

	@Override
	public List<Teachers> getTeacherByClassCoordinator(int classcoordinator_id) {
		return teacherRepo.findByClasscoordinator_id(classcoordinator_id);
	}

	@Override
	public Teachers getByUsernamePassword(String username, String password) {
		return teacherRepo.findByUsernamePassword(username, password);
	}

	@Override
	public int getTeacherCount(int classcoordinator_id) {
		return this.teacherRepo.countOfTeacher(classcoordinator_id);
	}

}
