import { combineReducers } from 'redux';

import userReducer from './user';
import advertisementsReducer from './advertisements';

const rootReducer = combineReducers({
  advertisements: advertisementsReducer,
  user: userReducer,
});

export default rootReducer;
