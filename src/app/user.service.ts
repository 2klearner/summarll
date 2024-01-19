import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from './usermodel';
import { Menu } from './menu';
import {Tables,Reservation} from './tablemodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  getUserLogin(username: string, password: string): Observable<any> {
    return this.httpclient.get("http://localhost:8080/cafe/user/userlogin?username=" + username + "&password=" + password);
  }

  userRegister(user: Object): Observable<Object> {
    return this.httpclient.post('http://localhost:8080/cafe/user/register', user);

  }//update profile
  updateUserProfile(userId:any, updatedUserData: User): Observable<User> {
    const url = ("http://localhost:8080/cafe/user/update/"+userId);
    return this.httpclient.put<User>(url, updatedUserData);
  }

  
  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<User> {
    const url = `http://localhost:8080/cafe/user/change-password/${userId}`;
    const params = new HttpParams()
    .set('oldPassword', oldPassword)
    .set('newPassword', newPassword);

  const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  return this.httpclient.put<User>(url, params.toString(), { headers });
  }
  
  // UserServic
  getCurrentUserId(): number | null {
    const userId = sessionStorage.getItem('userId'); // Replace 'userId' with the actual key you use to store the user ID
    return userId ? +userId : null;
  }


  searchTable(tablerow: string): Observable<any> {
    const url = "http://localhost:8080/cafe/user/search-table";
    const requestBody = { tablerow: tablerow };
    console.log("Search Table URL:", url);
  
    return this.httpclient.post(url, requestBody).pipe(
      catchError(error => {
        console.error("Error during searchTable request:", error);
        throw error;
      })
    );
  }


  reserveTable(id: number, selectedDateTime: Date, username: string): Observable<any> {
    const formattedDateTime = selectedDateTime.toISOString().slice(0, 16);
    console.log(formattedDateTime)
    const params = new HttpParams()
        .set('id', id.toString())
        .set('username', username)
        .set('selectedDateTime', formattedDateTime);
    
    return this.httpclient.post('http://localhost:8080/cafe/user/reserve-table', null, { params });
}

  tableBook(id: number): Observable<any> {
    let name = sessionStorage.getItem("name");
    return this.httpclient.get('http://localhost:8080/cafe/user/booktable?id=' + id + "&username=" + name);
  }

  getReservedTable(tableusername: string): Observable<any> {
    return this.httpclient.get("http://localhost:8080/cafe/user/bookedtables?username=" + tableusername);
  }

  getMenuList(): Observable<any> {
    const menuUrl = 'http://localhost:8080/cafe/user/menu'; // Update the URL
  
    return this.httpclient.get(menuUrl);
  }
  getMenuByItemName(name: string): Observable<Menu[]> {
    const url = `http://localhost:8080/cafe/user/menu/name?name=${name}`;
    return this.httpclient.get<Menu[]>(url);
  }

// 

id:any;
  user?: User;
  authenticate(username: string, password: string) {
    this.getUserLogin(username, password).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error("Error during authentication:", error);
      }
    );

    if (this.user) {
        
      console.log(this.user?.username+this.user?.id);
      sessionStorage.setItem('id', this.user.id.toString());
      sessionStorage.setItem('username', username);
      console.log("username:" + username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let name = sessionStorage.getItem('username')
    console.log(!(name === null))
    return !(name === null)
  }

  logOut() {
    // sessionStorage.removeItem('username')
    sessionStorage.clear();
  }
}
