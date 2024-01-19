package com.example.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.Menu;




@Repository
public interface MenuRepository extends JpaRepository<Menu, Long>{
List<Menu> findByName(String name);
public Menu findById(long id);
}
