import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

users: User[] =[];
testUser: User = {
  firstName: 'test',
  lastName: 'Test'
}
  
  constructor() { 
    this.users.push(this.testUser);
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user : User) {
    this.users.push(user);
  }
  
  removeUser(user: User) {
    let index = this.users.indexOf(user, 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  
}