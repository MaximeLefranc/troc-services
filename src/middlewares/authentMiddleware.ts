import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAuthentError,
  actionAuthentSuccess,
  FETCH_AUTHENT_USER,
  actionToggleLoader,
  DELETE_PROFILE,
  actionLogOut,
} from '../actions/user';
import { getUrlApi } from '../utils/utils';

const urlAPI = getUrlApi();

const authentMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_AUTHENT_USER: {
      store.dispatch(actionToggleLoader());
      console.log('on ma apl');
      const { email, password } = store.getState().user;
      axios
        .post(`${urlAPI}api/login_check`, {
          username: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(
              actionAuthentSuccess(
                response.data.data.pseudo,
                response.data.token,
                response.data.data.id
              )
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
    }
    case DELETE_PROFILE: {
      store.dispatch(actionToggleLoader());
      const token = localStorage.getItem('token_troc_services');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .delete(
          `${urlAPI}api/user/${localStorage.getItem(
            'id_troc_services'
          )}/delete`,
          config
        )
        .then(() => {
          store.dispatch(actionLogOut());
          window.location.href = `${window.location.origin}/`;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default authentMiddleware;
