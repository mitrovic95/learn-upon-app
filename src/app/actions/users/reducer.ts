import { UserAction, UserActionType } from './actions';
import { userInitialState, UserState } from './state';

export function userReducer(
  state = userInitialState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionType.GET_USER:
      return Object.assign({}, state, {
        users: action.payload.users
      });

    case UserActionType.ADD_USER:
      return Object.assign({}, state, {
        users: [...state.users, action.payload.user]
      });

    default:
      return state;
  }
};