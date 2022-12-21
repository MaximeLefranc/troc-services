import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import authentMiddleware from '../middlewares/authentMiddleware';
import inscriptionMiddleware from '../middlewares/inscriptionMiddleware';
import advertsMiddleware from '../middlewares/advertsMiddleware';
import contactMiddleware from '../middlewares/contactMiddleware';
import messagesMiddleware from '../middlewares/messagesMiddleware';

const composeEnhancers = composeWithDevTools({ trace: true });

const enhancers = composeEnhancers(
  applyMiddleware(
    inscriptionMiddleware,
    authentMiddleware,
    advertsMiddleware,
    contactMiddleware,
    messagesMiddleware,
  )
);

const store = createStore(reducer, enhancers);

export default store;
