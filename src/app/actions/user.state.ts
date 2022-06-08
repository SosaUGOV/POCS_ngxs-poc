import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UserInterface } from "../models/user.interfaces";
import { AddUser } from "./user.action";

export class UserStateModel {
  users: UserInterface[] = [];
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})
export class UserState {

  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(AddUser)
  addUser({getState, patchState}: StateContext<UserStateModel>, { payload }: AddUser) {
    const state = getState();

    patchState({
      users: [...state.users, payload]
    });
  }
}
