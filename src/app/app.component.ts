import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from './actions/users/store.service';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: Observable<User[]> = this.userStoreService.getUsers();
  // public users: User[] = [];
  user: User =  {
    "id": 147374,
    "first_name": "John5",
    "last_name": "Doe5",
    "email": "angular5@luptest.com",
    "sign_in_count": 0,
    "number_of_enrollments": 0,
    "number_of_enrollments_accessed": 0,
    "created_at": new Date("2019-04-01T10:44:51Z"),
    "last_sign_in_at": new Date("2019-04-01T10:44:51Z"),
    "account_expires": new Date("2019-04-01T10:44:51Z"),
    "sf_user_id": null,
    "sf_contact_id": null,
    "is_salesforce_contact": 0,
    "CustomData": null,
    "customDataFieldValues": [],
    "locale": "en",
    "enabled": true,
    "user_type": "learner",
    "can_enroll": true,
    "can_delete_users": false,
    "can_unenroll_users": false,
    "can_move_groups": false,
    "can_mark_complete": false,
    "tutor_can_edit_their_courses": true,
    "tutor_can_create_courses": false
}

  constructor(private userStoreService: UserStoreService) {}
  
  ngOnInit() {
    // this.userStoreService.dispatchGetUsersAction();
    // this.users$ = this.userStoreService.getUsers();
    // setTimeout(() => {
    //   this.userStoreService.dispatchGetUsersAction();
    // }, 500);
    
    setTimeout(() => {
      this.userStoreService.dispatchGetUsersAction();
      // this.users$ = this.userStoreService.getUsers();
      console.log("🚀 ~ file: app.component.ts ~ line 25 ~ AppComponent ~ ngOnInit ~ this.users$", this.users$)
    }, 2000);
  }

  // ngAfterViewInit() {
  //     this.userStoreService.dispatchCreateUserAction(this.user);
  //   this.users$ = this.userStoreService.getUsers();
  //   console.log("🚀 ~ file: app.component.ts ~ line 255 ~ AppComponent ~ ngOnInit ~ this.users$", this.users$)
  // }
}
