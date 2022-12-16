import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAuthentError,
  actionAuthentSuccess,
  FETCH_AUTHENT_USER,
  actionToggleLoader,
} from '../actions/user';
import { getUrlApi } from '../utils/utils';

const urlAPI = getUrlApi();

const authentMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_AUTHENT_USER:
      store.dispatch(actionToggleLoader());
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
          if (error.response.data.code === 401) {
            store.dispatch(actionAuthentError(error.response.data.message));
          } else {
            store.dispatch(
              actionAuthentError(
                "une erreur inattendue s'est produite, veullez réessayer plus tard."
              )
            );
          }
        })
        .finally(() => {
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    default:
      return next(action);
  }
};

export default authentMiddleware;
