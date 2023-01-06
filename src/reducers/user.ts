// ---- TypeScript Import ----
import { AnyAction } from 'redux';

// ---- Actions Import ----
import {
  AUTHENT_ERROR,
  AUTHENT_SUCCESS,
  CHANGE_INPUT_VALUE_CONNECTION,
  HAVE_TOKEN_IN_LOCALSTORAGE,
  LOG_OUT,
  SAVE_ALL_MEMBERS_IN_STATE,
  TOGGLE_BURGER_MENU,
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
  messageAuthent: string;
  burgerMenuIsOpen: boolean;
  listOfMembers: [];
}

export const initialState: UserState = {
  isLoading: false,
  modalLogInForm: false,
  email: '',
  password: '',
  isLoggedIn: false,
  pseudo: '',
  messageAuthent: '',
  burgerMenuIsOpen: false,
  listOfMembers: [],
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
    case AUTHENT_SUCCESS: {
      localStorage.setItem('token_troc_services', action.payload.token);
      localStorage.setItem('pseudo_troc_services', action.payload.pseudo);
      localStorage.setItem('id_troc_services', action.payload.id);
      return {
        ...state,
        modalLogInForm: false,
        email: '',
        password: '',
        isLoggedIn: true,
        pseudo: action.payload.pseudo,
      };
    }
    case AUTHENT_ERROR:
      return {
        ...state,
        messageAuthent: action.payload,
      };
    case HAVE_TOKEN_IN_LOCALSTORAGE: {
      if (localStorage.getItem('token_troc_services')) {
        return {
          ...state,
          isLoggedIn: true,
          pseudo: localStorage.getItem('pseudo_troc_services'),
        };
      } else {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
    }
    case LOG_OUT: {
      localStorage.removeItem('token_troc_services');
      localStorage.removeItem('pseudo_troc_services');
      localStorage.removeItem('id_troc_services');
      window.location.href = `${window.location.origin}/accueil`;
      return {
        ...state,
        isLoggedIn: false,
        pseudo: '',
      };
    }
    case SAVE_ALL_MEMBERS_IN_STATE:
      return {
        ...state,
        listOfMembers: action.payload,
      };
    case TOGGLE_BURGER_MENU:
      return {
        ...state,
        burgerMenuIsOpen: !state.burgerMenuIsOpen,
      };
    default:
      return state;
  }
};

export default userReducer;
