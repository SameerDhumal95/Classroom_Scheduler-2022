package com.cs.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs.restapi.entity.ViewTimetable;
import com.cs.restapi.repository.ViewTimetableDAO;

@CrossOrigin
@RestController
@RequestMapping(path = "/Timetable")
public class ViewTimetableController {
	
	@Autowired
	private ViewTimetableDAO vieww;
	
	@GetMapping("/get")
	public List<ViewTimetable> getAll(){
		return this.vieww.findAll();
	}
}
