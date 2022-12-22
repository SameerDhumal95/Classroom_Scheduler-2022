package com.cs.restapi.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.restapi.entity.TeacherSubjectInfo;
import com.cs.restapi.repository.TeacherSubjectInfoRepo;

@Service
public class TeacherSubjectImpl implements TeacherSubjectServices {
	
	@Autowired
	private TeacherSubjectInfoRepo teachSubjectRepo;

	@Override
	public TeacherSubjectInfo addTeacherSubject(TeacherSubjectInfo teacherSubject) {
		return this.teachSubjectRepo.save(teacherSubject);
	}

	@Override
	public TeacherSubjectInfo updateTeacherSubject(TeacherSubjectInfo teacherSubject) {
		return this.teachSubjectRepo.save(teacherSubject);
	}

	@Override
	public TeacherSubjectInfo deleteTeacherSubject(int teacher_subject_id) {
		TeacherSubjectInfo teachSubject=this.teachSubjectRepo.findById(teacher_subject_id).get();
		this.teachSubjectRepo.delete(teachSubject);
		return teachSubject;
	}
	
	



}
