import { AnyAction } from 'redux';
import {
  ADD_INSCRIPTION_SKILLS_IN_STATE,
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
  skills: number[];
  password: string;
  passwordConfirmation: string;
  message: string;
  inscriptionCompleted: boolean;
}

export const initialState: InscriptionState = {
  nickname: 'Toto34',
  lastname: 'Lefranc',
  firstname: 'Maxime',
  birthday: '',
  picture: '',
  email: 'maxilefranc@gmail.com',
  adress: '',
  town: 'COLOMBIERS',
  zip: '34440',
  description: 'fdgertgre',
  skills: [],
  password: '@1Trocservices',
  passwordConfirmation: '@1Trocservices',
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
    default:
      return state;
  }
};

export default inscriptionReducer;
