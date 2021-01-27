import { CreateUserAction, GetUsersAction, GetUsersSuccessAction, UserAction, UserActionType, CreateUserSuccessAction, GetUsersErrorAction } from './actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, concatMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserState } from './state';
import { Action } from 'rxjs/internal/scheduler/Action';
import { dispatch } from 'rxjs/internal/observable/pairs';

@Injectable()
export class UserEffects {

  @Effect()
  users$ = this.actions$
    .pipe(
      ofType<UserAction>(UserActionType.GET_USER),
      mergeMap(() => this.userService.getUsers()
      .pipe(
        map(users => {
          return (new GetUsersSuccessAction({users: users}));
        }),
        catchError((errorMessage) => of(new GetUsersErrorAction(errorMessage)))
      )),
  );

  @Effect({dispatch: false})
  usersSuccess$ = this.actions$
    .pipe(
      ofType<UserAction>(UserActionType.GET_USER_SUCCESS),
      tap(() => console.log('Action 1'))
  );

  constructor(private actions$: Actions, private userService: UserService) { }

}