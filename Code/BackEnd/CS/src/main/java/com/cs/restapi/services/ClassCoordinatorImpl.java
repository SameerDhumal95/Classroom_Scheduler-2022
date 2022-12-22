package com.cs.restapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.restapi.entity.ClassCoordinator;
import com.cs.restapi.repository.ClassCoordinatorDAO;

@Service
public class ClassCoordinatorImpl implements ClassCoordinatorServices{
	
	@Autowired
	private ClassCoordinatorDAO csRepo;
	
	@Override
	public List<ClassCoordinator> getClassCoordinators() {
		return csRepo.findAll();
	}

	@Override
	public ClassCoordinator getClassCoordinator(int classcoordinator_id) {
		return csRepo.findById(classcoordinator_id).get();
	}

	@Override
	public ClassCoordinator addClassCoordinator(ClassCoordinator cc) {
		csRepo.save(cc);
		return cc;
	}
	
	@Override
	public ClassCoordinator updateClassCoordinator(ClassCoordinator cc) {
		csRepo.save(cc);
		return cc;
	}
	
	@Override
	public ClassCoordinator deleteClassCoordinator(int classcoordinator_id) {
		ClassCoordinator cc=(ClassCoordinator) this.getClassCoordinator(classcoordinator_id);
		csRepo.delete(cc);
		return cc;
	}

	@Override
	public ClassCoordinator getByUsernameAndPassword(String username, String password) {
		return csRepo.findByUsernamePassword(username, password);
	}

}
