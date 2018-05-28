import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { User } from '../models/user';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  users: User[];
  newUser: User = {
    firstName: '',
    lastName: ''
  };



  constructor(private _service: UtilityService) { }

  ngOnInit() {
    this._service.getUsers().subscribe(result => this.users = result);
    console.log(this.users);
  }

  addNewUser() {
    this._service.addUser(this.newUser);
    this.newUser = {
      firstName: '',
      lastName: ''
    }
  }



}
