import { AnyAction } from 'redux';
import {

  CHANGE_INPUT_VALUE_CONNECTION,
  TOGGLE_LOADER,
  TOGGLE_LOGIN_FORM,
} from '../actions/user';

export interface UserState {
  isLoading: boolean;
  modalLogInForm: boolean;
  email: string;
  password: string;
  isLoggedIn: boolean;
  pseudo: string;
}

export const initialState: UserState = {
  isLoading: false,
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
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default userReducer;
