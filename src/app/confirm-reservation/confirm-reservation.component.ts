import { Component, OnInit } from '@angular/core';

import { Reservation } from '../tablemodel';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrl: './confirm-reservation.component.css'
})
export class ConfirmReservationComponent implements OnInit {
  ReserveData?:Reservation[];
  ngOnInit(): void {
    this.getReservations();
      
  }
  constructor(private adminService:AdminService){}
  getReservations() {
    this.adminService.getReservations().subscribe(
      data => {
        this.ReserveData=data;},
      (err: any) => {
        console.error('Error! ');
      });
  }

  confirmReservation(reservationId: number) {
    console.log(reservationId);
    this.adminService.confirmReservation(reservationId).subscribe(
      () => {
        console.log('Reservation confirmed successfully');
        // Refresh the reservations list after confirmation
        this.getReservations();
      },
      () => {
        console.error('Error confirming reservation:');
      }
    );
  }
}
