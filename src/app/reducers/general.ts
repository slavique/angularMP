import { ActionReducer, Action } from '@ngrx/store';

export const LOGIN = 'login;';
export const LOGOUT = 'logout;';

export const loginReducer: ActionReducer<any> = (store: boolean = false, action: Action ) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return store;
  }
};
