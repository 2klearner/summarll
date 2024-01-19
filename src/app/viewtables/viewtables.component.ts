import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../tablemodel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewtables',
  templateUrl: './viewtables.component.html',
  styleUrl: './viewtables.component.css'
})
export class ViewtablesComponent {
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
