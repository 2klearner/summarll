package com.example.springboot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity //lightweight persistence domain object
public class TableModel {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String tablerow;
	private String tablenumber;
	private String tablecapacity;
	private String tabletype;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTablerow() {
		return tablerow;
	}
	public void setTablerow(String tablerow) {
		this.tablerow = tablerow;
	}
	public String getTablenumber() {
		return tablenumber;
	}
	public void setTablenumber(String tablenumber) {
		this.tablenumber = tablenumber;
	}
	public String getTablecapacity() {
		return tablecapacity;
	}
	public void setTablecapacity(String tablecapacity) {
		this.tablecapacity = tablecapacity;
	}
	public String getTabletype() {
		return tabletype;
	}
	public void setTabletype(String tabletype) {
		this.tabletype = tabletype;
	}
	@Override
	public String toString() {
		return "TableModel [id=" + id + ", tablerow=" + tablerow + ", tablenumber=" + tablenumber + ", tablecapacity="
				+ tablecapacity + ", tabletype=" + tabletype + "]";
	}
   


	
}
