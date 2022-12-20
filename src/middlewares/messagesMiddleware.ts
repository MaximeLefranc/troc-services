import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionSaveMessages,
  FETCH_ALL_MESSAGES_FOR_ONE_USER,
} from '../actions/messages';
import { actionToggleLoader } from '../actions/user';
import { getUrlApi } from '../utils/utils';

const messagesMiddleware: Middleware = (store) => (next) => (action) => {
  const urlAPI = getUrlApi();
  switch (action.type) {
    case FETCH_ALL_MESSAGES_FOR_ONE_USER: {
      store.dispatch(actionToggleLoader());
      const id = localStorage.getItem('id_troc_services');
      const token = localStorage.getItem('token_troc_services');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const requestMessagesReceived = axios.get(
        `${urlAPI}api/user/${id}/messages`,
        config
      );
      const requestMessagesSent = axios.get(
        `${urlAPI}api/user/${id}/messages/sent`,
        config
      );
      axios
        .all([requestMessagesReceived, requestMessagesSent])
        .then(
          axios.spread((...responses) => {
            store.dispatch(
              actionSaveMessages(responses[0].data, responses[1].data)
            );
          })
        )
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

export default messagesMiddleware;
