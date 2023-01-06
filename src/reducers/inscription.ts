// ---- TypeScript Import ----
import { AnyAction } from 'redux';
import { Category } from '../components/SkillsSelect';

// ---- Actions Import ----
import {
  ADD_INSCRIPTION_SKILLS_IN_STATE,
  CHANGE_INPUT_VALUE_INSCRIPTION,
  ERROR_MESSAGE_INSCIPTION,
  INSCRIPTION_ERROR,
  INSCRIPTION_SUCCESS,
  SET_INFO_PROFILE_IN_INPUTS_STATE,
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
  inscriptionError: boolean;
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
  inscriptionError: false,
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
        message: action.payload,
      };
    case INSCRIPTION_ERROR:
      return {
        ...state,
        message: action.payload,
        inscriptionError: true,
      };
    case SET_INFO_PROFILE_IN_INPUTS_STATE: {
      const skills = action.payload.skill.map((skill: Category) => {
        return { value: skill.id, label: skill.name };
      });
      return {
        ...state,
        nickname: action.payload.nickname,
        lastname: action.payload.last_name,
        firstname: action.payload.first_name,
        birthday: action.payload.birth_date.substr(0, 10),
        email: action.payload.email,
        adress: action.payload.address,
        town: action.payload.city,
        zip: action.payload.zip_code,
        description: action.payload.biography,
        skills: skills,
      };
    }
    default:
      return state;
  }
};

export default inscriptionReducer;
