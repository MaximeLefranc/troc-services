import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAuthentError,
  actionAuthentSuccess,
  FETCH_AUTHENT_USER,
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

const authentMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_AUTHENT_USER:
      const { email, password } = store.getState().user;
      axios
        .post(`${urlAPI}api/login_check`, {
          username: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            store.dispatch(
              actionAuthentSuccess(response.data.pseudo, response.data.token)
            );
          }
        })
        .catch((error) => {
          store.dispatch(
            actionAuthentError(
              "une erreur inattendue s'est produite, veullez réessayer plus tard."
            )
          );
        });
      return next(action);
    default:
      return next(action);
  }
};

export default authentMiddleware;
