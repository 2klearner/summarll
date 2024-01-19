package com.example.springboot.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Menu;
import com.example.springboot.model.Reservation;
import com.example.springboot.model.TableModel;
import com.example.springboot.model.UserModel;
import com.example.springboot.repository.MenuRepository;
import com.example.springboot.repository.ReservationRepository;
import com.example.springboot.repository.TableRepository;
import com.example.springboot.repository.UserRepository;




@CrossOrigin(origins="*")

@RestController
@RequestMapping("/cafe/user")
public class UserControllerNew {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	private MenuRepository menuRepository; 
	  
	@Autowired
	TableRepository tableRepository;
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@GetMapping("/registered")
	public List<UserModel> getRegisteredUser() {
		return userRepository.findAll();
	}
	
	@PostMapping("/register")
	public UserModel registeration(@RequestBody UserModel userModel) {
		return userRepository.save(userModel);
	}
	
	@GetMapping("/userlogin")
	public UserModel login(@RequestParam String username,@RequestParam String password) {
		UserModel user= userRepository.findByUsernameAndPassword(username,password);
		System.out.println(user);
		if (user!=null)
			return user;
		else
			return null;
	
	}
	
	
	@PutMapping("/update/{userId}")
    public ResponseEntity<UserModel> updateUser(@PathVariable int userId, @Validated @RequestBody UserModel userDetails) throws ResourceNotFoundException {
        UserModel user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id: " + userId));

       if (userDetails.getName()!=null)
        user.setName(userDetails.getName());
       if (userDetails.getEmail()!=null)
        user.setEmail(userDetails.getEmail());
       if (userDetails.getMobile()!=null)
        user.setMobile(userDetails.getMobile());
       if (userDetails.getAddress()!=null)
        user.setAddress(userDetails.getAddress());
       if (userDetails.getPassword()!=null)
     // user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());

        final UserModel updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }
	
	
	
	 
	@PostMapping("/reserve-table")
	public ResponseEntity<Reservation> reserveTable(@RequestParam int id,
	                                                @RequestParam String username,
	                                                @RequestParam @DateTimeFormat(pattern =  "yyyy-MM-dd HH:mm:ss.SSSSSS") LocalDateTime selectedDateTime) {
	    TableModel table = tableRepository.findById(id);
	    Reservation reservation = new Reservation();
	    reservation.setDate(selectedDateTime.toLocalDate());
	    reservation.setTime(selectedDateTime.toLocalTime());
	    reservation.setName(username);
	    reservation.setTablerow(table.getTablerow());
	    reservation.setStatus("Pending");
	    Reservation savedReservation = reservationRepository.save(reservation);
	    return ResponseEntity.status(HttpStatus.CREATED).body(savedReservation);
	}
	
	
	
	
	
	@GetMapping("/bookedtables")
	public ResponseEntity<List<Reservation>> getBookedTables(@RequestParam String username){
		List<Reservation> reservations = reservationRepository.findByName(username);
		return ResponseEntity.ok(reservations);
		
	}
	
	@GetMapping("/menu")
	public List<Menu> getAllMenu(){
		return menuRepository.findAll();
	}	
	
	@GetMapping("/menu/name")
    public ResponseEntity<List<Menu>> getMenuByItemName(@RequestParam String name) {
        List<Menu> menuList = (List<Menu>) menuRepository.findByName(name);

        if (menuList.isEmpty()) {
            throw new ResourceNotFoundException("No menus found with name: " + name);
        }

        return ResponseEntity.ok(menuList);
    }
	
	@PostMapping("/search-table")
	public ResponseEntity<?> getBookedTable(@RequestBody Map<String, String> requestBody) {
	    String tablerow = requestBody.get("tablerow");

	    if (tablerow == null || tablerow.isEmpty()) {
	        return ResponseEntity.badRequest().body("Required parameter 'tablerow' is missing or empty.");
	    }

	    List<TableModel> result = tableRepository.findByTablerow(tablerow);
	    return ResponseEntity.ok(result);
	}
}


