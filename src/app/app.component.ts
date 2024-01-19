import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Baklawa Cafe';
  constructor(public adminLogin:AdminService,public userLogin:UserService){}
    ngOnInit(){

    }
  }

