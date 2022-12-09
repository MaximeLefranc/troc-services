import { AnyAction } from 'redux';
import { ADD_ADVERTS_IN_STATE } from '../actions/advertisements';

export interface AdvertsState {
  listOfAdverts: [];
}

export const initialState: AdvertsState = {
  listOfAdverts: [],
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
    default:
      return state;
  }
};

export default advertisementsReducer;
