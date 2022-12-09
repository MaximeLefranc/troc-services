import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import authentMiddleware from '../middlewares/authentMiddleware';
import inscriptionMiddleware from '../middlewares/inscriptionMiddleware';

const composeEnhancers = composeWithDevTools;

const enhancers = composeEnhancers(
  applyMiddleware(authentMiddleware, inscriptionMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
