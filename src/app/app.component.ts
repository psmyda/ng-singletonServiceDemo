import { Component } from '@angular/core';
import { User } from './models/user';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SingletonService demo app';
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
