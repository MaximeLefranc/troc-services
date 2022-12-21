import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionErrorMessageSent,
  actionFetchAllMessagesForOneUser,
  actionSaveMessages,
  actionSuccessMessageSent,
  DELETE_MESSAGE,
  FETCH_ALL_MESSAGES_FOR_ONE_USER,
  MESSAGE_IS_READ,
  SEND_MESSAGE,
} from '../actions/messages';
import { actionToggleLoader } from '../actions/user';
import { getUrlApi } from '../utils/utils';

const messagesMiddleware: Middleware = (store) => (next) => (action) => {
  const urlAPI = getUrlApi();
  const id = localStorage.getItem('id_troc_services');
  const token = localStorage.getItem('token_troc_services');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  switch (action.type) {
    case FETCH_ALL_MESSAGES_FOR_ONE_USER: {
      store.dispatch(actionToggleLoader());
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
    case DELETE_MESSAGE: {
      store.dispatch(actionToggleLoader());
      axios
        .put(
          `${urlAPI}api/messages/${action.payload}/delete`,
          {
            is_hidden: true,
          },
          config
        )
        .then(() => {
          store.dispatch(actionFetchAllMessagesForOneUser());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    }
    case SEND_MESSAGE: {
      store.dispatch(actionToggleLoader());
      const { subject, message } = store.getState().messages;
      const idSender = localStorage.getItem('id_troc_services');
      axios
        .post(
          `${urlAPI}api/user/${idSender}/messages/send`,
          {
            receiver: action.payload,
            content: message,
            object: subject,
          },
          config
        )
        .then(() => {
          store.dispatch(actionSuccessMessageSent());
          store.dispatch(actionFetchAllMessagesForOneUser());
          window.location.href = `${window.location.origin}/profils/messages/recus`;
        })
        .catch(() => {
          store.dispatch(
            actionErrorMessageSent(
              "Une erreur s'est produite, merci de réessayer ultérieurement"
            )
          );
        })
        .finally(() => {
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    }
    case MESSAGE_IS_READ: {
      store.dispatch(actionToggleLoader());
      axios
        .put(
          `${urlAPI}api/messages/${action.payload}/edit`,
          {
            is_read: true,
          },
          config
        )
        .then(() => {
          store.dispatch(actionFetchAllMessagesForOneUser());
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

export default messagesMiddleware;
