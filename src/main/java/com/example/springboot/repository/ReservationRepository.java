package com.example.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot.model.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
	List<Reservation> findByName(String name);
	
}
