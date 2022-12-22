package com.cs.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs.restapi.entity.ClassCoordinator;
import com.cs.restapi.entity.SubjectInfo;
import com.cs.restapi.services.SubjectServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/subject")
public class SubjectController {
	
	@Autowired
	private SubjectServices subjectService;
	
	@PostMapping("/add")
	public ResponseEntity<SubjectInfo> addSubject(@RequestBody SubjectInfo subject) {
		SubjectInfo sub=this.subjectService.addSubject(subject);
		if(sub!=null) {
			return new ResponseEntity<SubjectInfo>(sub, HttpStatus.CREATED);
		}else {
			return new ResponseEntity<SubjectInfo>(sub, HttpStatus.CREATED);
		}
	}
	
	@PutMapping("/update")
	public SubjectInfo updateSubject(@RequestBody SubjectInfo subject) {
		return this.subjectService.updateSubject(subject);
	}
	
	@DeleteMapping("/delete/{subject_id}")
	public SubjectInfo deleteSubject(@PathVariable int subject_id) {
		return this.subjectService.deleteSubject(subject_id);
	}
	
	@GetMapping("/getAll")
	public List<SubjectInfo> getAllSubject(){
		return this.subjectService.getAllSubject();
	}
	
	@GetMapping("/getSubject/{classcoordinator_id}")
	public List<SubjectInfo> getByClassCoordinator(@PathVariable int classcoordinator_id){
		return this.subjectService.getSubjectByClassCoordinator(classcoordinator_id);
	}
	
	@GetMapping("/getCount/{classcoordinator_id}")
	public int getTeacherCount(@PathVariable int classcoordinator_id) {
		return this.subjectService.getSubjectCount(classcoordinator_id);
	}
}
