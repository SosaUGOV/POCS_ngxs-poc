import { UserInterface } from '../models/user.interfaces';

export class AddUser {
  static readonly type  = '[User] Add';

  constructor(public payload: UserInterface) {}
}
