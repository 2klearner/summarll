import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';

import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { AddtablesComponent } from './addtables/addtables.component';
import { SearchtablesComponent } from './searchtables/searchtables.component';
import { ViewtablesComponent } from './viewtables/viewtables.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserMenuListComponent } from './user-menu-list/user-menu-list.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';




@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    AdminloginComponent,
    AdminlogoutComponent,
    UserregisterComponent,
    UserlogoutComponent,
    AddtablesComponent,
    SearchtablesComponent,
    ViewtablesComponent,
    AddMenuComponent,
    MenuListComponent,
    UpdateMenuComponent,
    AboutusComponent,
    ContactUsComponent,
    GalleryComponent,
    MenuitemComponent,
    UpdateProfileComponent,
    AdminhomeComponent,
    UserMenuListComponent,
    // AdminRegisterComponent,
    UserpageComponent,
    ConfirmReservationComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
