import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: any[] ;
  constructor(private userService:UserListService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data; 
      console.log(data);
    })
  }

}
