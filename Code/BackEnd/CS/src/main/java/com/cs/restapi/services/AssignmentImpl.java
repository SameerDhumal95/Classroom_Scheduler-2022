package com.cs.restapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.restapi.entity.AssignmentInfo;
import com.cs.restapi.repository.AssignmentDAO;

@Service
public class AssignmentImpl implements AssignmentServices{
	
	@Autowired
	private AssignmentDAO assignmentRepo;
	
	@Override
	public AssignmentInfo addAssignment(AssignmentInfo assignmnet) {
		return this.assignmentRepo.save(assignmnet);
	}

	@Override
	public AssignmentInfo updateAssignment(AssignmentInfo assignment) {
		return this.assignmentRepo.save(assignment);
	}

	@Override
	public AssignmentInfo deleteAssignment(int assignment_id) {
		AssignmentInfo assignment=this.assignmentRepo.findById(assignment_id).get();
		return assignment ;
	}

	@Override
	public List<AssignmentInfo> findAllAssignment() {
		return this.assignmentRepo.findAll();
	}

	@Override
	public List<AssignmentInfo> findAssignmentByTeacher(int teacher_id) {
		return this.assignmentRepo.findAssignmentByTeacher(teacher_id);
	}

}
