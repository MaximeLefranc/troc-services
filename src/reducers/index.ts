import { combineReducers } from 'redux';

import userReducer, { UserState } from './user';

import inscriptionReducer, { InscriptionState } from './inscription';
import advertisementsReducer, { AdvertsState } from './advertisements';
import messagesReducer, { MessagesState } from './messages';

export interface GlobalState {
  advertisements: AdvertsState;
  user: UserState;
  inscription: InscriptionState;
  messages: MessagesState;
}

const rootReducer = combineReducers({
  advertisements: advertisementsReducer,
  user: userReducer,
  inscription: inscriptionReducer,
  messages: messagesReducer,
});

export default rootReducer;
