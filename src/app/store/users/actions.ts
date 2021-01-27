import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UserActionType {
    GET_USER = '[USER] Get users',
    GET_USER_SUCCESS = '[USER] Get users success',
    GET_USER_ERROR = '[USER] Get users error',
    
    ADD_USER = '[USER] Add user',
    ADD_USER_SUCCESS = '[USER] Add user success',
    ADD_USER_ERROR = '[USER] Get users error',
}

export class GetUsersAction implements Action {
    readonly type = UserActionType.GET_USER;
    constructor(public payload: { users: User[] }) { }
}

export class GetUsersSuccessAction implements Action {
    readonly type = UserActionType.GET_USER_SUCCESS;
    constructor(public payload: { users: User[] }) { }
}

export class GetUsersErrorAction implements Action {
    readonly type = UserActionType.GET_USER_ERROR;
    constructor(public payload: string) { }
}

export class CreateUserAction implements Action {
    readonly type = UserActionType.ADD_USER;
    constructor(public user: User) { }
}

export class CreateUserSuccessAction implements Action {
    readonly type = UserActionType.ADD_USER_SUCCESS;
    constructor(public payload: { user: User }) { }
}

export class CreateUserErrorAction implements Action {
    readonly type = UserActionType.ADD_USER_ERROR;
    constructor(public payload: string) { }
}

export type UserAction
  = GetUsersAction
  | GetUsersSuccessAction
  | GetUsersErrorAction
  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserErrorAction;