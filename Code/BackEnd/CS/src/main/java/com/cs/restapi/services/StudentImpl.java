package com.cs.restapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.restapi.entity.Students;
import com.cs.restapi.repository.StudentsDAO;

@Service
public class StudentImpl implements StudentServices{
	
	@Autowired
	private StudentsDAO studentRepo;
	
	@Override
	public List<Students> getStudents() {
		return studentRepo.findAll();
	}

	@Override
	public Students getStudent(int student_id) {
		return studentRepo.findById(student_id).get();
	}

	@Override
	public Students addStudent(Students student) {
		studentRepo.save(student);
		return student;
	}

	@Override
	public Students updateStudent(Students student) {
		studentRepo.save(student);
		return student;
	}

	@Override
	public Students deleteStudent(int student_id) {
		Students student=this.getStudent(student_id);
		studentRepo.delete(student);
		return student;
	}

	@Override
	public List<Students> getStudentsByClassCoordinator(int classcoordinator_id) {
		return studentRepo.findByClasscoordinator_id(classcoordinator_id);
	}

	@Override
	public Students getByUsernameAndPassword(String username, String password) {
		return studentRepo.findByUsernamePassword(username, password);
	}

	@Override
	public int getStudentCount(int classcoordinator_id) {
		return studentRepo.countOfStudent(classcoordinator_id);
	}

}
