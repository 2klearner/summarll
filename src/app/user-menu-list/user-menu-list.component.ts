import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-menu-list',
  templateUrl: './user-menu-list.component.html',
  styleUrl: './user-menu-list.component.css'
})
export class UserMenuListComponent implements OnInit {
  menuItem: Menu[] = [];
  searchQuery: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  private getMenu() {
    this.userService.getMenuList().subscribe(data => {
      this.menuItem = data;
    });
  }

  searchMenu() {
    if (this.searchQuery.trim() !== '') {
      this.userService.getMenuByItemName(this.searchQuery).subscribe(data => {
        this.menuItem = data;
      });
    } else {
      this.getMenu();
    }
  }
}