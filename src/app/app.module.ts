import { TrapFocusDirective } from './directives/focus-trap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reduceState, StoreModule } from '@ngrx/store';
import { LayoutComponent } from './layout/layout.component';
import { UserStoreService } from './store/users/store.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/users/effect';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersModule } from './features/users/users.module';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UsersModule,
    StoreModule.forRoot(reduceState),
    EffectsModule.forRoot([EffectsModule])
  ],
  exports: [UsersModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [UserStoreService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
