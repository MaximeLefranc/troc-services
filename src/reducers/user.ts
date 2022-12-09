import { AnyAction } from 'redux';
import {
  CHANGE_INPUT_VALUE_CONNECTION,
  TOGGLE_LOGIN_FORM,
} from '../actions/user';

export interface UserState {
  modalLogInForm: boolean;
  email: string;
  password: string;
  isLoggedIn: boolean;
  pseudo: string;
}

export const initialState: UserState = {
  modalLogInForm: false,
  email: '',
  password: '',
  isLoggedIn: false,
  pseudo: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const userReducer = (state: UserState = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        modalLogInForm: !state.modalLogInForm,
      };
    case CHANGE_INPUT_VALUE_CONNECTION:
      return {
        ...state,
        [action.payload.input]: action.payload.newValue,
      };
    default:
      return state;
  }
};

export default userReducer;
