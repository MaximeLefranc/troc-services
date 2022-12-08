import axios from 'axios';
import { Middleware } from 'redux';
import { FETCH_ADVERTISEMENTS_FOR_MAIN_PAGE } from '../actions/advertisements';

const advertsMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVERTISEMENTS_FOR_MAIN_PAGE:
      // axios('http://localhost:8000/api/advertisements')
      break;
    default:
      next(action);
  }
};

export default advertsMiddleware;
