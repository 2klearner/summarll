package com.example.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Menu;
import com.example.springboot.model.Reservation;
import com.example.springboot.model.TableModel;
import com.example.springboot.repository.MenuRepository;
import com.example.springboot.repository.ReservationRepository;
import com.example.springboot.repository.TableRepository;



@CrossOrigin(origins="*")
@RestController
@RequestMapping("/cafe/api")
public class AdminController {
	
	
	@Autowired
	TableRepository tableRepository;
	
	@Autowired
	private MenuRepository menuRepository; 
	@Autowired
	private ReservationRepository reservationRepository;


	
	// get all Menus
	@GetMapping("/menu")
	public List<Menu> getAllMenu(){
		return menuRepository.findAll();
	}		
	
	// create Menu rest api
	@PostMapping("/add-menu")
	public Menu createMenu(@RequestBody Menu Menu) {
		return menuRepository.save(Menu);
	}
	

	
	// get Menu by id rest api
	@GetMapping("/menu/{name}")
	public ResponseEntity<List<Menu>> getMenuByItemName(@PathVariable String name) {
	    List<Menu> menuList = menuRepository.findByName(name);
	    
	    		   if (menuList.isEmpty()) {
	    		        throw new ResourceNotFoundException("Menu not exist with id: " +name );
	    		    }
	    
	    return new ResponseEntity<>(menuList, HttpStatus.OK);
	}

	//update menu rest api
	@PutMapping("update/{name}")
	public ResponseEntity<Menu> updateMenu(@PathVariable String name, @RequestBody Menu menuDetails) {
	    List<Menu> menuList = menuRepository.findByName(name);

	    if (menuList.isEmpty()) {
	        throw new ResourceNotFoundException("Menu not exist with name: " + name);
	    }
	    
	    Menu existingMenu = menuList.get(0);
	    existingMenu.setName(menuDetails.getName());
	    existingMenu.setItemPrice(menuDetails.getItemPrice());
	    existingMenu.setDescription(menuDetails.getDescription());
	    existingMenu.setStatus(menuDetails.getStatus());

	    Menu updatedMenu = menuRepository.save(existingMenu);
	    return ResponseEntity.ok(updatedMenu);
	}

	
 //GetReserved 
	
	@GetMapping("/reserved")
	public ResponseEntity<List<Reservation>> getAllReservation(){
		List<Reservation> reservations = reservationRepository.findAll();
		return ResponseEntity.ok(reservations);
		
	}
	
	//change status
	
	@PostMapping("/confirmreservation/{id}")
	public Reservation confirmReservation(@PathVariable int id){
		 	Optional<Reservation> reservation = reservationRepository.findById(id);
		    if (reservation.isPresent()) {
		        reservation.get().setStatus("Confirmed");
		        return reservationRepository.save(reservation.get());
		    } else {
		        throw new RuntimeException("Reservation not found with ID: " + id);
		    }
	}
	
	
	@DeleteMapping("delete/{name}")
	public ResponseEntity<Map<String, Boolean>> deleteMenu(@PathVariable String name) {
	    List<Menu> menuList = menuRepository.findByName(name);

	    if (!menuList.isEmpty()) {
	        Menu menu = menuList.get(0);
	        menuRepository.delete(menu);

	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);

	        return ResponseEntity.ok(response);
	    } else {
	        throw new ResourceNotFoundException("Menu not found with name: " + name);
	    }
	}
	
	@GetMapping("getAll/tables")
	public List<TableModel> getAllReservedTables() {
		return tableRepository.findAll();
	}

	
	@PostMapping("/addtables")
	public TableModel saveTables(@Validated @RequestBody TableModel tableModel) {
		return tableRepository.save(tableModel);
	}
	
	
}
