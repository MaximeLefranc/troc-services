import { combineReducers } from 'redux';

import userReducer, { UserState } from './user';
import advertisementsReducer from './advertisements';
import inscriptionReducer, { InscriptionState } from './inscription';

export interface GlobalState {
  user: UserState;
  inscription: InscriptionState;
}

const rootReducer = combineReducers({
  advertisements: advertisementsReducer,
  user: userReducer,
  inscription: inscriptionReducer,
});

export default rootReducer;
