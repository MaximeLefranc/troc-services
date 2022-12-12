import { combineReducers } from 'redux';

import userReducer, { UserState } from './user';
import advertisementsReducer, { AdvertsState } from './advertisements';

export interface GlobalState {
  advertisements: AdvertsState;
  user: UserState;
}

const rootReducer = combineReducers({
  advertisements: advertisementsReducer,
  user: userReducer,
});

export default rootReducer;
