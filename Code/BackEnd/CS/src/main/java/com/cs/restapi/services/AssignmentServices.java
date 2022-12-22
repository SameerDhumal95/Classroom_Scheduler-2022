package com.cs.restapi.services;

import java.util.List;

import com.cs.restapi.entity.AssignmentInfo;

public interface AssignmentServices {
	
	public AssignmentInfo addAssignment(AssignmentInfo assignmnet);
	
	public AssignmentInfo updateAssignment(AssignmentInfo assignment);
	
	public AssignmentInfo deleteAssignment(int assignment);
	
	public List<AssignmentInfo> findAllAssignment();
	
	public List<AssignmentInfo> findAssignmentByTeacher(int teacher_id);
}
