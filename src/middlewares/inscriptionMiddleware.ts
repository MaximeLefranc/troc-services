import axios from 'axios';
import { Middleware } from 'redux';
import { SUBMIT_INSCRIPTION_FORM } from '../actions/inscription';

let urlAPI: string;
if (process.env.NODE_ENV === 'development') {
  if (process.env.REACT_APP_API_URL_DEV) {
    urlAPI = process.env.REACT_APP_API_URL_DEV;
  }
} else if (process.env.NODE_ENV === 'production') {
  if (process.env.REACT_APP_API_URL_PROD) {
    urlAPI = process.env.REACT_APP_API_URL_PROD; //! mettre la bonne url de PORD dans le fichier .env
  }
}

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
        description,
        password,
      } = store.getState().inscription;
      axios
        .post(`${urlAPI}/api/subscription`, {
          email: email,
          password: password,
          firstName: firstname,
          lastName: lastname,
          birthDate: birthday,
          nickname: nickname,
          biography: description,
          imageFile: picture,
          address: adress,
          city: town,
          zipCode: zip,
        })
        .then((response) => {
          console.log(response);
        });
      return next(action);
    default:
      return next(action);
  }
};

export default inscriptionMiddleware;
