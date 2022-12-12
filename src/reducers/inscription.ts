import { AnyAction } from 'redux';
import {
  CHANGE_INPUT_VALUE_INSCRIPTION,
  ERROR_MESSAGE_INSCIPTION,
} from '../actions/inscription';

export interface InscriptionState {
  nickname: string;
  lastname: string;
  firstname: string;
  birthday: string;
  picture: string | File;
  email: string;
  adress: string;
  town: string;
  zip: string;
  description: string;
  password: string;
  passwordConfirmation: string;
  message: string;
}

export const initialState: InscriptionState = {
  nickname: '',
  lastname: '',
  firstname: '',
  birthday: '',
  picture: '',
  email: '',
  adress: '',
  town: '',
  zip: '',
  description: '',
  password: '',
  passwordConfirmation: '',
  message: '',
};

const inscriptionReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: InscriptionState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_INSCRIPTION:
      return {
        ...state,
        [action.payload.input]: action.payload.newValue,
      };
    case ERROR_MESSAGE_INSCIPTION:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default inscriptionReducer;
