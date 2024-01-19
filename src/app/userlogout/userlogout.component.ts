import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogout',
  templateUrl: './userlogout.component.html',
  styleUrls: ['./userlogout.component.css']
})
export class UserlogoutComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.logOut();
this.router.navigate(['userlogin']);
  }

}
