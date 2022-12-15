import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAuthentSuccess,
  actionToggleLoader,
  FETCH_AUTHENT_USER,
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

export default authentMiddleware;
