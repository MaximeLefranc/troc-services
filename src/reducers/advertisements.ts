// ---- TypeScript Import ----
import { AnyAction } from 'redux';
import { Category } from '../components/SkillsSelect';

// ---- Actions Import ----
import {
  ADD_ADVERTS_IN_STATE,
  ADD_MESSAGE,
  ADD_SKILLS_IN_STATE,
  ADD_SKILLS_NEW_ADVERT,
  CHANGE_INPUT_VALUE_NEW_ADVERT,
  SET_INFO_ADVERT_IN_INPUTS_STATE,
  SUBMIT_NEW_ADVERT_ERROR,
  TOGGLE_SUBMIT_SUCCESS,
} from '../actions/advertisements';

export interface AdvertsState {
  listOfAdverts: [];
  listOfSkills: [];
  titleInput: string;
  picture: string | File;
  descriptionInput: string;
  skills: { value: number; label: string }[];
  message: string;
  submitSuccess: boolean;
}

export const initialState: AdvertsState = {
  listOfAdverts: [],
  listOfSkills: [],
  titleInput: '',
  picture: '',
  descriptionInput: '',
  skills: [],
  message: '',
  submitSuccess: false,
};

const advertisementsReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: AdvertsState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_ADVERTS_IN_STATE:
      return {
        ...state,
        listOfAdverts: action.payload,
      };
    case ADD_SKILLS_IN_STATE:
      return {
        ...state,
        listOfSkills: action.payload,
      };
    case CHANGE_INPUT_VALUE_NEW_ADVERT:
      return {
        ...state,
        [action.payload.nameInput]: action.payload.newValue,
      };
    case ADD_SKILLS_NEW_ADVERT:
      return {
        ...state,
        skills: action.payload,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case SUBMIT_NEW_ADVERT_ERROR:
      return {
        ...state,
        message: "Une erreur s'est produite, merci de réessayer ultérieurement",
      };
    case TOGGLE_SUBMIT_SUCCESS:
      return {
        ...state,
        titleInput: '',
        picture: '',
        descriptionInput: '',
        skills: [],
        message: action.payload.message,
        submitSuccess: action.payload.trueOrFalse,
      };
    case SET_INFO_ADVERT_IN_INPUTS_STATE: {
      const skills = action.payload.skills.map((skill: Category) => {
        return { value: skill.id, label: skill.name };
      });
      return {
        ...state,
        titleInput: action.payload.title,
        descriptionInput: action.payload.content,
        skills: skills,
      };
    }
    default:
      return state;
  }
};

export default advertisementsReducer;
