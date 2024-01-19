import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardService {
  constructor(private router:Router,private authService:AdminService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
if(this.authService.isAdminLoggedIn())
return true;
this.router.navigate(['adminlogin']);
return false;

  }
}
