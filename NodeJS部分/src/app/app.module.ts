import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './page/login/login.component';

import { IndexComponent } from './page/index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { MessageComponent } from './page/message/message.component';
import { SettingComponent } from './page/setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    UserComponent,
   
    LoginComponent,
  
    IndexComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    MessageComponent,
    SettingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
