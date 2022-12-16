import { AnyAction } from 'redux';
import {
  ADD_ADVERTS_IN_STATE,
  ADD_MESSAGE,
  ADD_SKILLS_IN_STATE,
  ADD_SKILLS_NEW_ADVERT,
  CHANGE_INPUT_VALUE_NEW_ADVERT,
  SUBMIT_NEW_ADVERT_ERROR,
} from '../actions/advertisements';

export interface AdvertsState {
  listOfAdverts: [];
  listOfSkills: [];
  titleInput: string;
  picture: string | File;
  descriptionInput: string;
  skills: { value: number; label: string }[];
  message: string;
}

export const initialState: AdvertsState = {
  listOfAdverts: [],
  listOfSkills: [],
  titleInput: '',
  picture: '',
  descriptionInput: '',
  skills: [],
  message: '',
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
    default:
      return state;
  }
};

export default advertisementsReducer;
