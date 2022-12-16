import { AnyAction } from 'redux';
import {
  ADD_INSCRIPTION_SKILLS_IN_STATE,
  CHANGE_INPUT_VALUE_INSCRIPTION,
  ERROR_MESSAGE_INSCIPTION,
  INSCRIPTION_ERROR,
  INSCRIPTION_SUCCESS,
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
  skills: { value: number; label: string }[];
  password: string;
  passwordConfirmation: string;
  message: string;
  inscriptionCompleted: boolean;
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
  skills: [],
  password: '',
  passwordConfirmation: '',
  message: '',
  inscriptionCompleted: false,
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
    case ADD_INSCRIPTION_SKILLS_IN_STATE:
      return {
        ...state,
        skills: action.payload,
      };
    case INSCRIPTION_SUCCESS:
      return {
        ...state,
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
        skills: [],
        password: '',
        passwordConfirmation: '',
        message: 'Insciption réussie! Vous pouvez vous connecter',
        inscriptionCompleted: true,
      };
    case INSCRIPTION_ERROR:
      return {
        ...state,
        message: "Une erreur c'est produite, merci de réessayer",
        inscriptionCompleted: false,
      };
    default:
      return state;
  }
};

export default inscriptionReducer;
