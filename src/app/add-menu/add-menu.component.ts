import { Component } from '@angular/core';

import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css'
})
export class AddMenuComponent {

  menu: Menu = new Menu();
  successMessage: string = ''; // Variable to hold success message

  constructor(private menuService: MenuService, private router: Router) {}

  saveMenu() {
    console.log(this.menu);
    this.menuService.addMenu(this.menu).subscribe(
      data => {
        console.log(data);
        this.successMessage = 'Menu successfully added!';
        this.goToMenuList();
      },
      error => console.log(error)
    );
  }

  goToMenuList() {
    this.router.navigate(['/menu-list']);
  }

  onSubmit() {
    console.log(this.menu);
    this.saveMenu();
  }
}
