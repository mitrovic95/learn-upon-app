import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() userData: User[] = [];
  @Output() showModals: EventEmitter<any> = new EventEmitter();
  openModal = true;

  constructor() { }

  ngOnInit(): void {
  }

  activateModal() {
    this.showModals.emit(this.openModal);
  }
}
