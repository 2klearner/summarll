import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {
  message:string = '';
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {}
  checkLogin() {
    const isValidAdmin = this.adminService.authentication(this.username, this.password);
    
    if (isValidAdmin) {
      console.log("validate");
      this.router.navigate(['/adminhome']);
      this.invalidLogin = false;
     // Set admin login status
    } else {
      console.log("not validate");
      this.message = 'Invalid Credentials';
      this.invalidLogin = true;
      // Set admin login status
    }
  }
  




  logOut() {
    this.adminService.logOut();
  }
}
