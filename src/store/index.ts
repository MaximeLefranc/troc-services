import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import authentMiddleware from '../middlewares/authentMiddleware';
import advertsMiddleware from '../middlewares/advertsMiddleware';

const composeEnhancers = composeWithDevTools;

const enhancers = composeEnhancers(
  applyMiddleware(authentMiddleware, advertsMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
