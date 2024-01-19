package com.example.springboot.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.TableModel;

@Repository
public interface TableRepository extends JpaRepository<TableModel, Integer> {
    List<TableModel> findByTablerow(String tablerow);
    TableModel findById(int id);
//    List<TableModel> findByTableusername(String username);
    
    List<TableModel> findByTablerowContainingIgnoreCase(String tablerow);
}
