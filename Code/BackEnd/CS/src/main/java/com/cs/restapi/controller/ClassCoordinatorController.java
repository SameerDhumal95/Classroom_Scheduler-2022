package com.cs.restapi.controller;

import java.util.List;

import javax.validation.Valid;

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
import com.cs.restapi.entity.UserInfo;
import com.cs.restapi.services.ClassCoordinatorServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/ClassCoordinator")
public class ClassCoordinatorController {
	
	@Autowired
	private ClassCoordinatorServices service;
	
	//Getting List of All ClassCoordinators
	@GetMapping("/getAll")
	public List<ClassCoordinator> showAllCC(){
		return this.service.getClassCoordinators();
	}
	
	
	//Getting ClassCoordinator By Id
	@GetMapping("/getById/{classcoordinator_id}")
	public ClassCoordinator getCC(@PathVariable int classcoordinator_id) {
		return (ClassCoordinator) this.service.getClassCoordinator(classcoordinator_id);
	}
	
	@PostMapping("/SignUp")
	public ResponseEntity<ClassCoordinator> registerCC(@Valid @RequestBody ClassCoordinator cc) {
		return new ResponseEntity<ClassCoordinator>(this.service.addClassCoordinator(cc),HttpStatus.CREATED);
	}
	
	@PutMapping("/Update")
	public ClassCoordinator updateCC(@RequestBody ClassCoordinator cc) {
		return this.service.updateClassCoordinator(cc);
	}
	
	
	//Deleting ClassCoordinator By Id
	@DeleteMapping("/ClassCoordinator/{classcoordinator_id}")
	public ResponseEntity<HttpStatus> deleteCC(@PathVariable int classcoordinator_id){
		try {
			this.service.deleteClassCoordinator(classcoordinator_id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		catch(Exception e){
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/Login")
	public ResponseEntity<ClassCoordinator> signIn(@RequestBody UserInfo user) {
		ClassCoordinator cc=this.service.getByUsernameAndPassword(user.getUsername(), user.getPassword());
		if(cc!=null) {
			return new ResponseEntity<ClassCoordinator>(cc, HttpStatus.ACCEPTED);
		}else {
			return new ResponseEntity<ClassCoordinator>(cc, HttpStatus.BAD_REQUEST);
		}
	}
	
}
