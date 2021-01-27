import { UserService } from 'src/app/services/user.service';
import { UserStoreService } from './../../../../store/users/store.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userData: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
