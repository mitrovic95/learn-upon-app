import { User } from './../../models/user.model';
import { GetUsersAction, CreateUserAction, GetUsersSuccessAction, GetUsersErrorAction, CreateUserErrorAction, CreateUserSuccessAction } from './actions';

const user: User =  {
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

describe('Get users', () => {
    it('should create an action', () => {
      new GetUsersAction({ users: [] });
    });
});

describe('Get users success', () => {
    it('should create an action', () => {
      new GetUsersSuccessAction({ users: [] });
    });
});

describe('Get users error', () => {
    it('should create an action', () => {
      new GetUsersErrorAction('Something get wrong!');
    });
});

describe('Create user', () => {
    it('should create an action', () => {
      new CreateUserAction(user);
    });
});

describe('Create user success', () => {
    it('should create an action', () => {
      new CreateUserSuccessAction({ user });
    });
});

describe('Create user error', () => {
    it('should create an action', () => {
      new CreateUserErrorAction('Something get wrong!');
    });
});
