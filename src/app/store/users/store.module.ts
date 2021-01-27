import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { reduceState, StoreModule } from '@ngrx/store';
import { UserEffects } from './effect';
import { userReducer } from './reducer';
import { UserStoreService } from './store.service';


@NgModule({
  imports: [
    StoreModule.forFeature('users', reduceState),
  ],
  exports: [StoreModule],
  providers: [UserStoreService]
})
export class UserStoreModule { }