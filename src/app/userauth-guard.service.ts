import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class UserauthGuardService implements CanActivate {

  constructor(private router:Router,private userService:UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.userService.isUserLoggedIn())
    return true;
    this.router.navigate(['userlogin']);
    return false;
}
}