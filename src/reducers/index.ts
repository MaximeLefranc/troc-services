// ---- Redux Import ----
import { combineReducers } from 'redux';

// ---- TypeScript Import ----
import userReducer, { UserState } from './user';
import inscriptionReducer, { InscriptionState } from './inscription';
import advertisementsReducer, { AdvertsState } from './advertisements';
import messagesReducer, { MessagesState } from './messages';
import contactReducer, { ContactState } from './contact';
import searchBarReducer, { SearchBar } from './searchBar';

export interface GlobalState {
  contact: ContactState;
  advertisements: AdvertsState;
  user: UserState;
  inscription: InscriptionState;
  messages: MessagesState;
  searchBar: SearchBar;
}

const rootReducer = combineReducers({
  advertisements: advertisementsReducer,
  user: userReducer,
  inscription: inscriptionReducer,
  messages: messagesReducer,
  contact: contactReducer,
  searchBar: searchBarReducer,
});

export default rootReducer;
