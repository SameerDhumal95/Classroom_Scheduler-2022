package com.cs.restapi.services;

import java.util.List;

import com.cs.restapi.entity.ClassCoordinator;

public interface ClassCoordinatorServices {
	
	public List<ClassCoordinator> getClassCoordinators();
	
	public ClassCoordinator getClassCoordinator(int classcoordinator_id);
	
	public ClassCoordinator addClassCoordinator(ClassCoordinator cc);
	
	public ClassCoordinator updateClassCoordinator(ClassCoordinator cc);
	
	public ClassCoordinator deleteClassCoordinator(int classcoordinator_id);
	
	public ClassCoordinator getByUsernameAndPassword(String username,String password);
	
}
