package com.example.springboot;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.example.springboot.model.TableModel;

public class TableModelTest {

    private TableModel table;

    @BeforeEach
    public void setUp() {
        table = new TableModel();
        table.setTablerow("A");
        table.setTablenumber("1");
        table.setTablecapacity("4");
        table.setTabletype("Square");
    }

    @Test
    public void testGettersAndSetters() {
        table.setId(1);
        assertEquals(1, table.getId());

        assertEquals("A", table.getTablerow());

        assertEquals("1", table.getTablenumber());

        assertEquals("4", table.getTablecapacity());

        assertEquals("Square", table.getTabletype());
    }


    public void testToString() {
        String expected = "TableModel [id=1, tablerow=A, tablenumber=1, tablecapacity=4, tabletype=Square, tableusername=user123, tablestatus=Occupied]";
        assertEquals(expected, table.toString());
    }
}
