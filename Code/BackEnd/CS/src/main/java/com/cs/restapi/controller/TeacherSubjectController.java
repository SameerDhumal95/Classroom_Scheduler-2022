package com.cs.restapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs.restapi.entity.TeacherSubjectInfo;
import com.cs.restapi.services.TeacherSubjectServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/teachersubject")
public class TeacherSubjectController {
	
	@Autowired
	public TeacherSubjectServices teacherSubjectServices;
	
	@PostMapping("/add")
	public ResponseEntity<TeacherSubjectInfo> addTeacherSubject(@RequestBody TeacherSubjectInfo teacherSubject){
		TeacherSubjectInfo ts= this.teacherSubjectServices.addTeacherSubject(teacherSubject);
		return new ResponseEntity<TeacherSubjectInfo>(ts,HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<TeacherSubjectInfo> updateTeacherSubject(@RequestBody TeacherSubjectInfo teacherSubject) {
		TeacherSubjectInfo ts= this.teacherSubjectServices.updateTeacherSubject(teacherSubject);
		return new ResponseEntity<TeacherSubjectInfo>(ts,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{teacher_subject_id}")
	public TeacherSubjectInfo deleteTeacherSubject(@PathVariable int teacher_subject_id) {
		return this.teacherSubjectServices.deleteTeacherSubject(teacher_subject_id);
	}
	
}
