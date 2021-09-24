import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { LoginComponent } from './page/login/login.component';


import {HomeComponent} from "./page/home/home.component";
import {ProfileComponent} from "./page/profile/profile.component";
import { MessageComponent } from './page/message/message.component';
import { SettingComponent } from './page/setting/setting.component';

//import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
 // { path: 'ngr-welcome',  component: WelcomeComponent}, 
// { path: '',  redirectTo: '/ngr-welcome',  pathMatch: 'full'},

  { path:'', component: IndexComponent, children: [
    {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'profile',
      component: ProfileComponent
  },
  {
      path: 'messages',
      component: MessageComponent
  },
  {
      path: 'settings',
      component: SettingComponent
  },

  ]},

  { path:'', component: LoginComponent},
  {path:'**', component: LoginComponent}


];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
