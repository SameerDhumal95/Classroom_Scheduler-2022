package com.cs.restapi.services;


import java.util.List;

import com.cs.restapi.entity.SubjectInfo;

public interface SubjectServices {
	
	public SubjectInfo addSubject(SubjectInfo subject);
	
	public SubjectInfo updateSubject(SubjectInfo subject);
	
	public SubjectInfo deleteSubject(int subject_id);
	
	public List<SubjectInfo> getAllSubject();
	
	public List<SubjectInfo> getSubjectByClassCoordinator(int classcoordinator_id);
	
	public int getSubjectCount(int classcoordinator_id);
}
