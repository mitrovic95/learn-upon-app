import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserState } from 'src/app/store/users/state';
import { UserStoreService } from 'src/app/store/users/store.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  users$: Observable<User[]> = this.userStoreService.getUsers();
  form = new FormGroup({});
  focused = '';
  showModal = false;
  userList: any = [];

  constructor(private userStoreService: UserStoreService, private userService: UserService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => { this.userList = (Object.values(data).map((data) => data))[0];
    })
    // this.userStoreService.dispatchGetUsersAction();
    // this.users$ = this.userStoreService.getUsers().pipe(map(val => val));
    // console.log("🚀 ~ file: user-page.component.ts ~ line 27 ~ UserPageComponent ~ ngOnInit ~ users", this.users$)
    
    // setTimeout(() => {
    //   var dd = this.userStoreService.getUsers().pipe(map(data => this.userList = data));
    //   debugger
    // }, 2000);
    // var ddr = this.users$.toPromise();
    // console.log("🚀 ~ file: user-page.component.ts ~ line 31 ~ UserPageComponent ~ ngOnInit ~ ddr", ddr)
    // ddr.then((data) => this.userList = data);
    // this.users$ = this.store.select(state => state.users);
    // debugger
    // this.store.pipe(state => state).subscribe(data => {
    // console.log("🚀 ~ file: user-page.component.ts ~ line 31 ~ UserPageComponent ~ ngOnInit ~ this.userList", this.userList)
    //   console.log(data)
    // });
    // console.log("🚀 ~ file: user-page.component.ts ~ line 29 ~ UserPageComponent ~ ngOnInit ~ this.users$", this.users$)
    // console.log("🚀 ~ file: user-page.component.ts ~ line 24 ~ UserPageComponent ~ ngOnInit ~ ddd", ddd)
    //  console.log(this.users$)
    //  this.users$.subscribe(data => {console.log(data)});
    //  console.log("🚀 ~ file: user-page.component.ts ~ line 50 ~ UserPageComponent ~ ngOnInit ~ this.userList", this.userList)

    this.initForm();
  }

  initForm(): void {
    this.form = this._fb.group({
      firstName: [ "", [Validators.required, Validators.maxLength(25), Validators.minLength(3)]],
      lastName: [ "", [Validators.required, Validators.maxLength(25), Validators.minLength(3)]],
      email: [ "", [Validators.required, Validators.email, Validators.maxLength(40)]],
      username: [ "", [Validators.required, Validators.maxLength(25), Validators.minLength(3)]],
      password: [ "", [Validators.required, Validators.maxLength(25), Validators.minLength(6)]],
      passwordC: [ "", [Validators.required, Validators.maxLength(25), Validators.minLength(6)]],
      language: [ "en" ],
    });
  }

  formValid(): boolean {
    if (!this.form.valid) {
      alert(
        "Form not valid. Please fill out all highlighted fields."
      );
      this.form.markAllAsTouched();
      this.focusInvalidInput();
      return false;
    } else return true;
  }

  focusInvalidInput() {
    setTimeout(() => {
      document
        .getElementsByClassName("error")[0]
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (!this.formValid()) {
      return;
    } else {
      const formValue = Object.assign({}, this.form.getRawValue());
      let user: any = {
        User: {
          first_name: formValue.firstName,
          last_name: formValue.lastName,
          email: formValue.email,
          username: formValue.username,
          password: formValue.password,
          language: formValue.language
        }
      }
      debugger
      this.userService.createUser(user).subscribe();
      this.showModal = false;
    }
  }

  activateModal(isActive: boolean) {
    this.showModal = isActive;
  }
}
