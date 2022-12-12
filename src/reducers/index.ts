import { combineReducers } from 'redux';

import userReducer, { UserState } from './user';

import inscriptionReducer, { InscriptionState } from './inscription';
import advertisementsReducer, { AdvertsState } from './advertisements';

export interface GlobalState {
  advertisements: AdvertsState;
  user: UserState;
  inscription: InscriptionState;
}

const rootReducer = combineReducers({
  advertisements: advertisementsReducer,
  user: userReducer,
  inscription: inscriptionReducer,
});

export default rootReducer;
