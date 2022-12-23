import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionMessageSystem,
  actionCleanContactForm,
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
        .then((response) => {
          store.dispatch(actionMessageSystem(response.data));
          store.dispatch(actionSubmitContactSuccess());
        })
        .catch(() => {
          store.dispatch(
            actionMessageSystem(
              `oups.. une erreur c'est produite, veuillez patienter puis réessayer`
            )
          );
        })
        .finally(() => {
          store.dispatch(actionToggleLoader());
          store.dispatch(actionCleanContactForm([]));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default contactMiddleware;
