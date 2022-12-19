import { combineReducers } from 'redux';

import userReducer, { UserState } from './user';

import inscriptionReducer, { InscriptionState } from './inscription';
import advertisementsReducer, { AdvertsState } from './advertisements';
import messagesReducer, { MessagesState } from './messages';
import contactReducer, { ContactState } from './contact';

export interface GlobalState {
  contact: ContactState;
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
  contact: contactReducer,
});

export default rootReducer;
