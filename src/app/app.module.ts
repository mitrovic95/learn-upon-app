import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UserComponent } from './features/users/pages/user/user.component';
import { UserListComponent } from './features/users/components/user-list/user-list.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { userReducer } from './actions/users/reducer';
import { UserStoreService } from './actions/users/store.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './actions/users/effect';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //StoreModule.forFeature('user', userReducer),
    StoreModule.forRoot({}),
    // StoreModule.forRoot(userReducer),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [UserStoreService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
