import { AnyAction } from 'redux';
import { CHANGE_INPUT_VALUE_SEARCHBAR } from '../actions/searchBar';

export interface SearchBar {
  searchName: string;
  searchZipCode: string;
}

export const initialState: SearchBar = {
  searchName: '',
  searchZipCode: '',
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
    default:
      return state;
  }
};

export default searchBarReducer;
