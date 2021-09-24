import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public login : Login = new Login();
  // public message : string;
  doLogin(): void {
    //when login successful set the loh_in to 1
    sessionStorage.setItem('user_id','1');
    sessionStorage.setItem('username','Mike');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
