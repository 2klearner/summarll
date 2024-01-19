import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../usermodel';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit{
  ngOnInit(): void {
    this.username="";
    this.password="";
    this.router.navigate(['/userlogout']);
    sessionStorage.clear();
  }
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;
  user?: User;
  message:string = '';
  constructor(private router: Router, private userService: UserService) { }

  checkUserLogin() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    if (this.userService.authenticate(this.username, this.password)) {
      console.log('Authentication successfully');
      this.router.navigate(['']); // Navigate to user dashboard (change as needed)
      this.invalidLogin = false;
     // alert('Login Successful');
    } else {
      console.log('Authentication failed');
      this.message = 'Invalid Credentials';
      this.invalidLogin = true;
    }
  }

  
}
