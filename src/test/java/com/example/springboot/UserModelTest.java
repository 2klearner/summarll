// UserModelTest.java
package com.example.springboot;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.example.springboot.model.UserModel;

public class UserModelTest {

    private UserModel user;

    @BeforeEach
    public void setUp() {
        user = new UserModel();
        user.setName("John Doe");
        user.setEmail("john@example.com");
        user.setMobile("1234567890");
        user.setAddress("123 Main St");
        user.setUsername("johndoe");
        user.setPassword("password");
    }

    @Test
    public void testGettersAndSetters() {
        user.setId(1);
        assertEquals(1, user.getId());

        assertEquals("John Doe", user.getName());
        assertEquals("john@example.com", user.getEmail());
        assertEquals("1234567890", user.getMobile());
        assertEquals("123 Main St", user.getAddress());
        assertEquals("johndoe", user.getUsername());
        assertEquals("password", user.getPassword());
    }

   
    public void testToString() {
        String expected = "UserModel [id=1, name=John Doe, email=john@example.com, mobile=1234567890, address=123 Main St, username=johndoe, password=password]";
        assertEquals(expected, user.toString());
    }
}
