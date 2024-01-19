import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../usermodel';
import { Reservation, Tables} from '../tablemodel';

@Component({
  selector: 'app-searchtables',
  templateUrl: './searchtables.component.html',
  styleUrls: ['./searchtables.component.css']
})
export class SearchtablesComponent implements OnInit {
reservation:Reservation=new Reservation();
table:Tables[] = [];
selectedDate: any;
selectedTime: any;
tablerow:string='';

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.gotosearch();
  }
  tableSearch(){
  this.userService.searchTable(this.tablerow).subscribe(
    data=>{
      this.table=data;
    }
  );
  }

  onTableSearch(){
  this.tableSearch();
  this.gotosearch();
  }

  bookTable(id:number){
// this.userService.tableBook(id).subscribe();
  }


reserveTable(id:number,selectedDate:any,selectedTime:any){
  const selectedDateTime =  new Date(`${this.selectedDate}T${this.selectedTime}`);
  console.log(selectedDateTime)
  const username = sessionStorage.getItem('username');
  if(username)
  this.userService.reserveTable(id,selectedDateTime,username).subscribe();
  this.router.navigate(['/viewtable'])

  }
  gotosearch(){
    this.router.navigate(['/searchtable'])
  }
}
