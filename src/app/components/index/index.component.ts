import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { UserInterface } from '../../models/user.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  users: Observable<UserInterface[]>;

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
   }

  ngOnInit() {
  }

}
