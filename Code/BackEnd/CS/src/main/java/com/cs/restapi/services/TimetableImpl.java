package com.cs.restapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.restapi.entity.Timetable;
import com.cs.restapi.repository.TimetableDAO;

@Service
public class TimetableImpl implements TimetableServices {

	@Autowired
	private TimetableDAO timetableRepo;
	
	@Override
	public Timetable addTimetable(Timetable timetable) {
		return this.timetableRepo.save(timetable);
	}

	@Override
	public Timetable updateTimetable(Timetable timetable) {
		return this.timetableRepo.save(timetable);
	}

	@Override
	public Timetable deleteTimetable(int timetable_id) {
		Timetable tt=this.timetableRepo.findById(timetable_id).get();
		this.timetableRepo.delete(tt);
		return tt;
	}

	@Override
	public List<Timetable> getByClassCoordinator(int classcoordinator_id) {
		return this.timetableRepo.findByClasscoordinator_id(classcoordinator_id);
	}
	
	
}
