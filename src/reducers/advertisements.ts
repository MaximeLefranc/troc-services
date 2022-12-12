import { AnyAction } from 'redux';
import {
  ADD_ADVERTS_IN_STATE,
  ADD_SKILLS_IN_STATE,
} from '../actions/advertisements';

export interface AdvertsState {
  listOfAdverts: [];
  listOfSkills: [];
}

export const initialState: AdvertsState = {
  listOfAdverts: [],
  listOfSkills: [],
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
    default:
      return state;
  }
};

export default advertisementsReducer;
