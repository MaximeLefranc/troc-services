import axios from 'axios';
import { Middleware } from 'redux';
import { SUBMIT_INSCRIPTION_FORM } from '../actions/inscription';

const inscriptionMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_INSCRIPTION_FORM:
      const {
        nickname,
        lastname,
        firstname,
        birthday,
        picture,
        email,
        adress,
        town,
        zip,
        password,
        passwordConfirmation,
      } = store.getState().inscription;
      axios.post('', {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      });
      return next(action);
    default:
      return next(action);
  }
};

export default inscriptionMiddleware;
