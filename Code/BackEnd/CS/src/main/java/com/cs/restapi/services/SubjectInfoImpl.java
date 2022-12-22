package com.cs.restapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.restapi.entity.SubjectInfo;
import com.cs.restapi.repository.SubjectDAO;

@Service
public class SubjectInfoImpl implements SubjectServices{

	@Autowired
	private SubjectDAO subjectRepo;
	
	@Override
	public SubjectInfo addSubject(SubjectInfo subject) {
		return this.subjectRepo.save(subject);
	}

	@Override
	public SubjectInfo updateSubject(SubjectInfo subject) {
		return this.subjectRepo.save(subject);
	}

	@Override
	public SubjectInfo deleteSubject(int subject_id) {
		SubjectInfo subject=this.subjectRepo.findById(subject_id).get();
		this.subjectRepo.delete(subject);
		return subject;
	}

	@Override
	public List<SubjectInfo> getAllSubject() {
		return this.subjectRepo.findAll();
	}

	@Override
	public List<SubjectInfo> getSubjectByClassCoordinator(int classcoordinator_id) {
		return this.subjectRepo.findByClassCoordinator(classcoordinator_id);
	}

	@Override
	public int getSubjectCount(int classcoordinator_id) {
		return this.subjectRepo.countOfSubject(classcoordinator_id);
	}

}
