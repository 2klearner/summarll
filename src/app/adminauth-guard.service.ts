import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardService implements CanActivate {

  constructor(private router:Router,private authService:AdminService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
if(this.authService.isAdminLoggedIn())
return true;
this.router.navigate(['adminlogin']);
return false;

  }
    
  }

