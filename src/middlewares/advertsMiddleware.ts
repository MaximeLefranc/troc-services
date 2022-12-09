import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAddAdvertsInState,
  FETCH_ADVERTISEMENTS_FOR_MAIN_PAGE,
} from '../actions/advertisements';
import { actionToggleLoader } from '../actions/user';

let urlAPI: string;
if (process.env.NODE_ENV === 'development') {
  if (process.env.REACT_APP_API_URL_DEV) {
    urlAPI = process.env.REACT_APP_API_URL_DEV;
  }
} else if (process.env.NODE_ENV === 'production') {
  if (process.env.REACT_APP_API_URL_PROD) {
    urlAPI = process.env.REACT_APP_API_URL_PROD; //! mettre la bonne url de PORD dans le fichier .env
  }
}

const advertsMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVERTISEMENTS_FOR_MAIN_PAGE:
      store.dispatch(actionToggleLoader());
      axios(`${urlAPI}api/advertisements`)
        .then((response) => {
          store.dispatch(actionAddAdvertsInState(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    default:
      return next(action);
  }
};

export default advertsMiddleware;
