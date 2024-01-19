package com.example.springboot;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.example.springboot.model.Menu;



public class MenuTest {

    private Menu menu;

    @BeforeEach
    public void setUp() {
        menu = new Menu("Burger", "10.99", "Delicious burger", "Available");
    }

    @Test
    public void testGettersAndSetters() {
        menu.setId(1);
        assertEquals(1, menu.getId());

        menu.setName("Pizza");
        assertEquals("Pizza", menu.getName());

        menu.setItemPrice("12.99");
        assertEquals("12.99", menu.getItemPrice());

        menu.setDescription("Tasty pizza");
        assertEquals("Tasty pizza", menu.getDescription());

       
    }
    
    public void testToString() {
        String expected = "Menu [id=1, name=Burger, ItemPrice=10.99, Description=Delicious burger, Status=Available]";
        assertEquals(expected, menu.toString());
    }
}
