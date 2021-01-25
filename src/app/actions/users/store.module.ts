import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducer';
import { UserStoreService } from './store.service';


@NgModule({
  imports: [
    //StoreModule.forFeature('user', userReducer)
  ],
  exports: [StoreModule],
  providers: [UserStoreService]
})
export class UserStoreModule { }