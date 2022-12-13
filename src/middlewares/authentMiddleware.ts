import axios from 'axios';
import { Middleware } from 'redux';
import { FETCH_AUTHENT_USER } from '../actions/user';

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
      console.log(email, password);
      axios
        .post(`${urlAPI}api/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      return next(action);
    default:
      return next(action);
  }
};

export default authentMiddleware;
