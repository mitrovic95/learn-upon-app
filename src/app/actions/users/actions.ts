import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UserActionType {
    GET_USER = '[USER] Get users',
    GET_USER_SUCCESS = '[USER] Get users success',
    ADD_USER = '[USER] Add user',
    ERROR = '[USER] Get users error',
}

export class GetUsersAction implements Action {
    readonly type = UserActionType.GET_USER;
    constructor(public payload: { users: User[] }) { }
}
export class GetUsersSuccessAction implements Action {
    readonly type = UserActionType.GET_USER_SUCCESS;
    constructor(public payload: { users: User[] }) { }
}

export class CreateUserAction implements Action {
    readonly type = UserActionType.ADD_USER;
    constructor(public payload: { user: User }) { }
}

export class ErrorAction implements Action {
    readonly type = UserActionType.ERROR;
    constructor(public payload: string | any) { }
}

export type UserAction
  = GetUsersAction
  | CreateUserAction
  | ErrorAction;