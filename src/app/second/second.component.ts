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

  testUser: User = {
    firstName: 'test',
    lastName: 'Test'
  }

  constructor(private _service: UtilityService) {
    this.users.push(this.testUser);
   }

  ngOnInit() {
    this._service.addUser(this.testUser);
    this._service.getUsers().subscribe(result => this.users = result);
  }

}
