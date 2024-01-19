import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Menu } from './menu';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = "http://localhost:8080/cafe/api";

  constructor(private httpClient: HttpClient) { }
  registerAdmin(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(`http://localhost:8080/cafe/api/register`, admin, {responseType:'text' as 'json'});
  }


  authentication(username:string,password:string){
    if(username==="abi" && password==="123456"){
    sessionStorage.setItem('adminname',username)
    return true;
    }else{
      return false;
    }
    }

    getReservations() : Observable<any> {
      return this.httpClient.get("http://localhost:8080/cafe/api/reserved");
    }
  isAdminLoggedIn(): boolean {
    const user = sessionStorage.getItem('adminname');
    return user !== null;
  }

  getMenuList(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.baseUrl}/menu`)
      .pipe(
        catchError(error => {
          console.error('Error fetching menu list:', error);
          return throwError(error);
        })
      );
  }



  addMenu(menu: Menu): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/create/menu`, menu)
      .pipe(
        catchError(error => {
          console.error('Error adding menu:', error);
          return throwError(error);
        })
      );
  }

  updateMenu(name: string, menu: Menu): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update/menu/${name}`, menu)
      .pipe(
        catchError(error => {
          console.error('Error updating menu:', error);
          return throwError(error);
        })
      );
  }

  getMenuByname(name: string): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.baseUrl}/menu/name?name=${name}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching menu by name:', error);
          return throwError(error);
        })
      );
  }

  deleteMenu(name: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/delete/menu/${name}`)
      .pipe(
        catchError(error => {
          console.error('Error deleting menu:', error);
          return throwError(error);
        })
      );
  }

  confirmReservation(id: number) {
   return this.httpClient.post('http://localhost:8080/cafe/api/confirmreservation/'+id,{});
  }


  addTables(table: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/addtables`, table)
      .pipe( 
        catchError(error => {
          console.error('Error adding tables:', error);
          return throwError(error);
        })
      );
  }



  logOut(): void {
    sessionStorage.removeItem('adminname');
  }
}

