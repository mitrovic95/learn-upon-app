import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserStoreService } from './store/users/store.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {
  }
}
