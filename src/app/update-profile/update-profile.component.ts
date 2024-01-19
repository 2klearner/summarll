import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service'; // Update the import path based on your project structure
import { Router } from '@angular/router'; // Import the Router

import { User } from '../usermodel'; // Update the import path for your User model

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm: FormGroup = new FormGroup({});
  newPassword: string = '';
  updated: boolean = false;
  user: User = new User(); // Initialize with default user object

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router, // Inject the Router service
    private renderer: Renderer2 // Inject Renderer2 service
  ) {}

  ngOnInit(): void {
    this.updateProfileForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      mobile: [this.user.mobile, Validators.required],
      address: [this.user.address, Validators.required],
      newPassword: [''] // Assuming you have a newPassword field in the form
    });
  }


  updateProfile(): void {
    console.log("It's inside this method");
   
  
    const updatedUserData: User = {
      ...this.user,
      password: this.newPassword
    };
    const idFromSessionStorage = sessionStorage.getItem('id');
    this.userService.updateUserProfile(idFromSessionStorage, updatedUserData).subscribe(
      (updatedUser) => {
        console.log("It's getting clicked");
        // Handle success, e.g., show a success message
        console.log('Profile updated successfully:', updatedUser);
        this.updated = true;
  
       


        // Navigate to userlogin page only after the update operation is complete
        this.router.navigate(['/userlogout']);
        this.router.navigate(['/userlogout']);
      },
      (error) => {
        
        console.error('Error updating profile:', error);
      }
    );
  }
  
}
