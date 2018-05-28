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
  
}
