package com.cs.restapi.services;

import com.cs.restapi.entity.TeacherSubjectInfo;

public interface TeacherSubjectServices {
	
	public TeacherSubjectInfo addTeacherSubject(TeacherSubjectInfo teacherSubject);
	
	public TeacherSubjectInfo updateTeacherSubject(TeacherSubjectInfo teacherSubject);
	
	public TeacherSubjectInfo deleteTeacherSubject(int teacher_subject_id);
}
