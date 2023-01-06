// ---- Axios Import ----
import axios from 'axios';

// ---- TypeScript Import ----
import { Middleware } from 'redux';

// ---- Action Import ----
import {
  actionMessageSystem,
  actionSubmitContactSuccess,
  SUBMIT_CONTACT_FORM,
} from '../actions/contact';

// ---- Action Import ----
import { actionToggleLoader } from '../actions/user';

// ---- Utils Import ----
import { getUrlApi } from '../utils/utils';

const contactMiddleware: Middleware = (store) => (next) => (action) => {
  const urlAPI = getUrlApi();

  switch (action.type) {
    case SUBMIT_CONTACT_FORM: {
      store.dispatch(actionToggleLoader());

      const { lastname, firstname, subject, email, message } =
        store.getState().contact;
      const fullname = `${lastname} ${firstname}`;

      axios
        .post(`${urlAPI}api/contact`, {
          fullName: fullname,
          userEmail: email,
          subject: subject,
          message: message,
        })
        .then(() => {
          store.dispatch(
            actionMessageSystem(
              'Votre message a bien été envoyé, un administrateur vous répondra dans les meilleurs délais'
            )
          );
          store.dispatch(actionSubmitContactSuccess());
          setTimeout(() => {
            store.dispatch(actionSubmitContactSuccess());
            store.dispatch(actionMessageSystem(''));
          }, 3000);
        })
        .catch(() => {
          store.dispatch(
            actionMessageSystem(
              `oups.. une erreur c'est produite, veuillez patienter puis réessayer`
            )
          );
          setTimeout(() => {
            store.dispatch(actionMessageSystem(''));
          }, 3000);
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

export default contactMiddleware;
