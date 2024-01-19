import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogout',
  templateUrl: './adminlogout.component.html',
  styleUrl: './adminlogout.component.css'
})
export class AdminlogoutComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
this.adminService.logOut();
this.router.navigate(['adminlogin']);
  }

}