import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionMessageSystem,
  actionSubmitContactSuccess,
  SUBMIT_CONTACT_FORM,
} from '../actions/contact';
import { actionToggleLoader } from '../actions/user';
import { getUrlApi } from '../utils/utils';

const urlAPI = getUrlApi();

const contactMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM: {
      store.dispatch(actionToggleLoader());
      const { lastname, firstname, subject, email, message } =
        store.getState().contact;
      const fullname = `${lastname} ${firstname}`;
      axios
        .post(`${urlAPI}api/contac`, {
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
