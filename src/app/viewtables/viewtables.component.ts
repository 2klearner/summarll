import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../usermodel';
import { Tables, Reservation} from '../tablemodel';

@Component({
  selector: 'app-viewtables',
  templateUrl: './viewtables.component.html',
  styleUrls: ['./viewtables.component.css']
})
export class ViewtablesComponent implements OnInit {
ReserveData?:Reservation[];
  constructor(private router:Router,private userService:UserService){ }

  ngOnInit(): void {
    let name=sessionStorage.getItem('username');
    if(name)
this.userService.getReservedTable(name).subscribe(
data=>{
  this.ReserveData=data;
}
);
this.gotoViewTable();
  }
gotoViewTable(){
  this.router.navigate(['/viewtables'])
}
}
