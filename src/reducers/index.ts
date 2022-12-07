import { combineReducers } from 'redux';

import userReducer, { UserState } from './user';
import advertisementsReducer from './advertisements';

export interface GlobalState {
  user: UserState;
}

const rootReducer = combineReducers({
  advertisements: advertisementsReducer,
  user: userReducer,
});

export default rootReducer;
