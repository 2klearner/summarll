import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminauthGuardService } from './adminauth-guard.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';


import { UserloginComponent } from './userlogin/userlogin.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AddtablesComponent } from './addtables/addtables.component';
import { SearchtablesComponent } from './searchtables/searchtables.component';
import { ViewtablesComponent } from './viewtables/viewtables.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserMenuListComponent } from './user-menu-list/user-menu-list.component';

import { UserpageComponent } from './userpage/userpage.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { UserauthGuardService } from './userauth-guard.service';



const routes: Routes = [
{path:'',redirectTo:'',pathMatch:'full'},
{path:'adminlogin',component:AdminloginComponent},
{path:'adminlogout',component:AdminlogoutComponent,canActivate:[AdminauthGuardService]},
{path:'userpage',component:UserpageComponent},
{path:'userlogin',component:UserloginComponent},
{path:'gallery',component:GalleryComponent},
{path:'aboutus',component:AboutusComponent},
{path:'userregister',component:UserregisterComponent},
{path:'userlogout',component:UserlogoutComponent,canActivate:[UserauthGuardService]},
{path:'addtables',component:AddtablesComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'searchtable',component:SearchtablesComponent},
{path:'viewtable',component:ViewtablesComponent},
{path:'add-menu',component:AddMenuComponent},
{path:'menu-list',component:MenuListComponent},
{path:'update-menu/:name',component:UpdateMenuComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'menuitem',component:MenuitemComponent},
{path:'update-profile',component:UpdateProfileComponent},
{ path: 'user-menu-list', component: UserMenuListComponent },
{path :'confirmation',component:ConfirmReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
