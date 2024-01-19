import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
private baseURL ="http://localhost:8080/cafe/api/";

  constructor(private httpClient:HttpClient) { }
getMenuList():Observable<Menu[]>{
return this.httpClient.get<Menu[]>("http://localhost:8080/cafe/api/menu");
}

addMenu(menu:Menu):Observable<Object>{
  return this.httpClient.post("http://localhost:8080/cafe/api/add-menu",menu,{responseType:'text' as 'json'});
}
updateMenu(name: string, menu: Menu): Observable<Object> {
  return this.httpClient.put("http://localhost:8080/cafe/api/update/"+name,menu,{responseType:'text' as 'json'});
}
getMenuByname(name: String): Observable<Menu> {
  return this.httpClient.get<Menu>(`http://localhost:8080/cafe/api/menubyname/`+name);

}

getMenuView(name: String): Observable<Menu[]> {
  return this.httpClient.get<Menu[]>(`http://localhost:8080/cafe/api/menu/`+name);
}

deleteMenu(name:string): Observable<object>{
  return this.httpClient.delete("http://localhost:8080/cafe/api/delete/"+name);
}
}