import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const dummyUserListResponse = [
    {
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
    },
    {
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
  ];

  it('getUsers() should return data', () => {
    (done: DoneFn) => {   
    service.getUsers().subscribe(res => {
      expect(res).toEqual(dummyUserListResponse);
      done();
    })
    }
  });
});
