import { AnyAction } from 'redux';
import {
  CHANGE_INPUT_VALUE_SEARCHBAR,
  SAVE_RESULT_OF_RESEARCH_ADVERTS,
  SAVE_RESULT_OF_RESEARCH_MEMBERS,
} from '../actions/searchBar';

export interface SearchBar {
  searchName: string;
  searchZipCode: string;
  result: [];
}

export const initialState: SearchBar = {
  searchName: '',
  searchZipCode: '',
  result: [],
};

const searchBarReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: SearchBar = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_SEARCHBAR:
      return {
        ...state,
        [action.payload.input]: action.payload.newValue,
      };
    case SAVE_RESULT_OF_RESEARCH_ADVERTS:
      return {
        ...state,
        searchName: '',
        searchZipCode: '',
        result: action.payload,
      };
    case SAVE_RESULT_OF_RESEARCH_MEMBERS:
      return {
        ...state,
        searchName: '',
        searchZipCode: '',
        result: action.payload,
      };
    default:
      return state;
  }
};

export default searchBarReducer;
