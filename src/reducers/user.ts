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

// ---- Selector Import ----
import { isHeAdmin } from '../selectors/members';

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
  admin: boolean;
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
  admin: false,
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
      const isAdmin = isHeAdmin(action.payload.roles);
      localStorage.setItem('token_troc_services', action.payload.token);
      localStorage.setItem('pseudo_troc_services', action.payload.pseudo);
      localStorage.setItem('id_troc_services', action.payload.id);
      localStorage.setItem('admin_troc_services', JSON.stringify(isAdmin));
      return {
        ...state,
        modalLogInForm: false,
        email: '',
        password: '',
        isLoggedIn: true,
        pseudo: action.payload.pseudo,
        admin: isAdmin,
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
          admin:
            localStorage.getItem('admin_troc_services') === 'true'
              ? true
              : false,
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
      localStorage.removeItem('admin_troc_services');
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
