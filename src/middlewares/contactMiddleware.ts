import axios from 'axios';
import { Middleware } from 'redux';
import { SUBMIT_CONTACT_FORM } from '../actions/contact';
import { getUrlApi } from '../utils/utils';

const urlAPI = getUrlApi();

const contactMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM: {
      console.log('on ma apl');
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
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default contactMiddleware;
