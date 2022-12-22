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

import com.cs.restapi.entity.Students;
import com.cs.restapi.entity.UserInfo;
import com.cs.restapi.services.StudentServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/student")
public class StudentsController {
	
	@Autowired
	StudentServices studentService;
	
	@GetMapping("/getAll")
	public List<Students> showAllStudents(){
		return this.studentService.getStudents();
	}
	
	@GetMapping("/getById/{student_id}")
	public Students getById(int student_id) {
		return this.studentService.getStudent(student_id);
	}
	
	@PostMapping("/add")
	public Students addStudent(@RequestBody Students student) {
		return this.studentService.addStudent(student);
	}
	
	@PutMapping("/update")
	public Students updateStudent(@RequestBody Students student) {
		return this.studentService.updateStudent(student);
	}
	
	@DeleteMapping("/delete/{student_id}")
	public ResponseEntity<HttpStatus> deleteTeacher(@PathVariable int student_id){
		try {
			this.studentService.deleteStudent(student_id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		catch(Exception e){
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getByCoordinator/{classcoordinator_id}")
	public List<Students> studentByClassCoordinator(@PathVariable int classcoordinator_id){
		return this.studentService.getStudentsByClassCoordinator(classcoordinator_id);
	}
	
	@PostMapping("/Login")
	public ResponseEntity<Students> signIn(@RequestBody UserInfo user) {
		Students cc=this.studentService.getByUsernameAndPassword(user.getUsername(), user.getPassword());
		if(cc!=null) {
			return new ResponseEntity<Students>(cc, HttpStatus.ACCEPTED);
		}else {
			return new ResponseEntity<Students>(cc, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/getCount/{classcoordinator_id}")
	public int getStudentCount(@PathVariable int classcoordinator_id) {
		return this.studentService.getStudentCount(classcoordinator_id);
	}
}
