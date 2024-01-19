import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent implements OnInit {
  successMessage:String='';
  menuItem: Menu[]=[];

  constructor(private menuService: MenuService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMenu();
  }

  private getMenu(){
    this.menuService.getMenuList().subscribe(data => {
      this.menuItem = data;
    });
  }


  updateMenu(name:any){
    this.router.navigate(['update-menu', name]);

  }
  deleteMenu(name:any){
    this.menuService.deleteMenu(name).subscribe(data =>{
      console.log(data);
      this.successMessage = 'Menu deleted successfully!!';
      this.getMenu();
    })
 }

}
