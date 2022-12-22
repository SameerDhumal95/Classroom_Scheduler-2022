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

import com.cs.restapi.entity.Timetable;
import com.cs.restapi.services.TimetableServices;

@CrossOrigin
@RestController
@RequestMapping(path = "/Timetable")
public class TimetableController {
	
	@Autowired
	private TimetableServices timetableService;
	
	@PostMapping("/add")
	public ResponseEntity<Timetable> addTimetable(@RequestBody Timetable timetable){
		Timetable tt=this.timetableService.addTimetable(timetable);
		return new ResponseEntity<Timetable>(tt,HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Timetable> updateTimetable(@RequestBody Timetable timetable){
		Timetable tt=this.timetableService.updateTimetable(timetable);
		return new ResponseEntity<Timetable>(tt,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{timetable_id}")
	public Timetable deleteTimetable(@PathVariable int timetable_id) {
		return this.timetableService.deleteTimetable(timetable_id);
	}
	
	@GetMapping("/get/{classcoordinator_id}")
	public List<Timetable> getByClassCoordinator(@PathVariable int classcoordinator_id){
		return this.timetableService.getByClassCoordinator(classcoordinator_id);
	}
}
