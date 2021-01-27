import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user/user-page.component';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrapFocusDirective } from 'src/app/directives/focus-trap';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/store/users/effect';
import { reduceState, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UserPageComponent,
    UserComponent,
    UserListComponent,
    TrapFocusDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
