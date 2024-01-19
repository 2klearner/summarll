import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../usermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrl: './userregister.component.css'
})
export class UserregisterComponent implements OnInit {
  user:User=new User();
  submitted=false;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  addItemSave(){
    this.userService.userRegister(this.user).subscribe(
      data=>{
        this.user=new User();
      }
    );
  }

  registerData(){
    this.submitted=true;
    this.addItemSave();
  }
}

