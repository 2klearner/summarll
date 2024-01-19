import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Tables } from '../tablemodel';

@Component({
  selector: 'app-addtables',
  templateUrl: './addtables.component.html',
  styleUrls: ['./addtables.component.css']
})
export class AddtablesComponent implements OnInit {
  table:Tables=new Tables();
  submitted=false;
  constructor(private router:Router,private adminService:AdminService)  { }

  ngOnInit(): void {
    this. gotoAddTables();
  }
  onTablesSubmit(){
  this.adminService.addTables(this.table).subscribe(
    data=>{
      this.table=new Tables();
    }
  );
  
  }
  onTableSubmit(){
this.onTablesSubmit();
this.gotoAddTables();
this.submitted=true;
  }


  gotoAddTables(){
    this.router.navigate(['/addtables']);
    }
}
