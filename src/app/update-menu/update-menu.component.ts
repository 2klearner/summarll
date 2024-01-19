import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  name!: string;
  menu: Menu = new Menu();
  successMessage: string = ''; // Variable to hold success message
  constructor(private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    
    this.menuService.getMenuView(this.name).subscribe(data => {
      this.menu = data[0];
    });
  }

  

  onSubmit(){
    this.menuService.updateMenu(this.name, this.menu).subscribe( data =>{
      this.successMessage = 'Menu updated successfully!!';
      this.goToMenuList();
    }
    , (error: any) => console.log(error));
  }
  goToMenuList() {
    this.router.navigate(['/menu']);
  }

}