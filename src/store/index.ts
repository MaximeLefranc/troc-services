import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import authentMiddleware from '../middlewares/authentMiddleware';
import inscriptionMiddleware from '../middlewares/inscriptionMiddleware';
import advertsMiddleware from '../middlewares/advertsMiddleware';

const composeEnhancers = composeWithDevTools;

const enhancers = composeEnhancers(
  applyMiddleware(inscriptionMiddleware, authentMiddleware, advertsMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
