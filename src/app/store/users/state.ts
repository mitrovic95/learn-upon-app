import { createFeatureSelector, createSelector} from '@ngrx/store';

import { User } from '../../models/user.model';

export interface UserState {
  users: any;
  error: any;
}

export const userInitialState: UserState = {
  users: [],
  error: ''
};

export const userState = createFeatureSelector<UserState>('users');
export const selectedUsers = createSelector(userState, (state: UserState) => state?.users);
export const selectError = createSelector(userState, (state: UserState) => state?.error);