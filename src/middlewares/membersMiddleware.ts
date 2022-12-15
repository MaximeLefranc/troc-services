import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionSaveAllMemebersInState,
  actionToggleLoader,
  FETCH_ALL_MEMBERS,
} from '../actions/user';

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

const membersMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_MEMBERS:
      store.dispatch(actionToggleLoader());
      axios
        .get(`${urlAPI}api/user`)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(actionSaveAllMemebersInState(response.data));
          }
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

export default membersMiddleware;
