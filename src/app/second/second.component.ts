import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { User } from '../models/user';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  users: User[];

  constructor(private _service: UtilityService) {  }

  ngOnInit() {
    this._service.getUsers().subscribe(result => this.users = result);
    console.log(this.users);
  }

  removeUser(user: User) {
    this._service.removeUser(user);
  }
}