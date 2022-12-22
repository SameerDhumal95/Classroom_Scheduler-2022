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

import com.cs.restapi.entity.AssignmentInfo;
import com.cs.restapi.services.AssignmentServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/Assignment")
public class AssignmentController {
	@Autowired
	private AssignmentServices assignmentService;
	
	@PostMapping("/add")
	public ResponseEntity<AssignmentInfo> addAssignment(@RequestBody AssignmentInfo assignment){
		return new ResponseEntity<AssignmentInfo>(this.assignmentService.addAssignment(assignment),HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<AssignmentInfo> updateAssignment(@RequestBody AssignmentInfo assignment){
		return new ResponseEntity<AssignmentInfo>(this.assignmentService.addAssignment(assignment),HttpStatus.CREATED);
	}
	 
	@DeleteMapping("/delete/{assignment_id}")
	public AssignmentInfo deleteAssignment(@PathVariable int assignment_id) {
		return this.assignmentService.deleteAssignment(assignment_id);
	}
	
	@GetMapping("/getAll")
	public List<AssignmentInfo> getAll(){
		return this.assignmentService.findAllAssignment();
	}
	
	@GetMapping("/get/{teacher_id}")
	public List<AssignmentInfo> getByTeacher(@PathVariable int teacher_id){
		return this.assignmentService.findAssignmentByTeacher(teacher_id);
	}
	
}
