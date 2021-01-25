import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../models/user.model';
import * as Action from './actions';
import * as State from './state';
import { UserState } from './state';

@Injectable()
export class UserStoreService {

  constructor(private store: Store<UserState>) { }

  private dispatchAction(action: Action.UserAction) {
    this.store.dispatch(action);
  }

  dispatchGetUsersAction() {
    this.dispatchAction(new Action.GetUsersAction({ users: [] }));
  }

  dispatchCreateUserAction(user: User) {
    this.dispatchAction(new Action.CreateUserAction({ user: user }));
  }

  // sample of how to select piece of the state
  getUsers() {
    return this.store.select(State.selectedUsers);
  }

  getError() {
    return this.store.select(State.selectError);
  }
}