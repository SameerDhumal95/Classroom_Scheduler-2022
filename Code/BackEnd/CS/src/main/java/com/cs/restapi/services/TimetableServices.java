package com.cs.restapi.services;

import java.util.List;

import com.cs.restapi.entity.Timetable;

public interface TimetableServices {
	
	public Timetable addTimetable(Timetable timetable);
	
	public Timetable updateTimetable(Timetable timetable);
	
	public Timetable deleteTimetable(int timetable_id);
	
	public List<Timetable> getByClassCoordinator(int classcoordinator_id);
}
