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
import com.cs.restapi.entity.Teachers;
import com.cs.restapi.entity.UserInfo;
import com.cs.restapi.services.TeacherServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/teacher")
public class TeachersController {
	
	@Autowired
	private TeacherServices teacherService;
	
	@GetMapping("/getAll")
	public List<Teachers> showAllTeachers(){
		return this.teacherService.getTeachers();
	}
	
	@GetMapping("/getById/{teacher_id}")
	public Teachers getTeacher(@PathVariable int teacher_id) {
		return this.teacherService.getTeacher(teacher_id);
	}
	
	@PostMapping("/add")
	public Teachers registerTeacher(@RequestBody Teachers teacher) {
		return this.teacherService.addTeacher(teacher);
	}
	
	@PutMapping("/update")
	public Teachers updateTeacher(@RequestBody Teachers teacher) {
		return this.teacherService.addTeacher(teacher);
	}
	
	@DeleteMapping("/delete/{teacher_id}")
	public ResponseEntity<HttpStatus> deleteTeacher(@PathVariable int teacher_id){
		try {
			this.teacherService.deleteTeacher(teacher_id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		catch(Exception e){
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getByCoordinator/{classcoordinator_id}")
	public List<Teachers> getByCoordinators(@PathVariable int classcoordinator_id){
		return this.teacherService.getTeacherByClassCoordinator(classcoordinator_id);
	}
	
	@PostMapping("/Login")
	public ResponseEntity<Teachers> signIn(@RequestBody UserInfo user) {
		Teachers cc=this.teacherService.getByUsernamePassword(user.getUsername(), user.getPassword());
		if(cc!=null) {
			System.out.println("inside if");
			return new ResponseEntity<Teachers>(cc, HttpStatus.ACCEPTED);
		}else {
			System.out.println("inside else");
			return new ResponseEntity<Teachers>(cc, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/getCount/{classcoordinator_id}")
	public int getTeacherCount(@PathVariable int classcoordinator_id) {
		return this.teacherService.getTeacherCount(classcoordinator_id);
	}
}
