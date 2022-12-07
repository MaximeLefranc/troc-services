import { AnyAction } from 'redux';
import { CHANGE_INPUT_VALUE, TOGGLE_LOGIN_FORM } from '../actions/user';

// interface Action {
//   type: string;
//   payload?;
// }

export interface UserState {
  modalLogInForm: boolean;
  inputEmail: string;
  inputPassword: string;
  isLoggedIn: boolean;
  pseudo: string;
}

export const initialState: UserState = {
  modalLogInForm: false,
  inputEmail: '',
  inputPassword: '',
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
    case CHANGE_INPUT_VALUE:
      console.log(
        `Je suis ici ${action.payload.input} ${action.payload.newValue}`
      );
      return {
        ...state,
        [action.payload.input]: action.payload.newValue,
      };
    default:
      return state;
  }
};

export default userReducer;
