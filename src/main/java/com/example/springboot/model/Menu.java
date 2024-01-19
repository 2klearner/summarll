package com.example.springboot.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "menu")
public class Menu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	private String name;
	

	private String ItemPrice;
	
	
	private String Description;
    

	private String Status;
	
	
	public Menu() {
		
	}
	
	public Menu(String name, String itemPrice, String description, String status) {
		super();
		this.name = name;
		this.ItemPrice = itemPrice;
		this.Description = description;
		this.Status = status;
	}

	public Menu(String name, String itemPrice, String description) {
		this.name=name;
		this.ItemPrice=itemPrice;
		this.Description=description;
	}

	

	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getItemPrice() {
		return ItemPrice;
	}


	public void setItemPrice(String itemPrice) {
		ItemPrice = itemPrice;
	}


	public String getDescription() {
		return Description;
	}


	public void setDescription(String description) {
		Description = description;
	}


	public String getStatus() {
		return Status;
	}


	public void setStatus(String status) {
		Status = status;
	}



	}


	

