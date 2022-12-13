import axios from 'axios';
import { Middleware } from 'redux';
import { SUBMIT_INSCRIPTION_FORM } from '../actions/inscription';
import { actionToggleLoader } from '../actions/user';
import { getBase64 } from '../utils/utils';

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
      store.dispatch(actionToggleLoader());
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
        skills,
        password,
      } = store.getState().inscription;
      let name = '';
      if (picture !== '') {
        name = picture.name;
      }
      const formData = new FormData();
      formData.append('image_file', picture);
      const requestPicture = axios.post(
        `${urlAPI}api/user/registerfile`,
        formData
      );
      const imageBase64 = getBase64(picture);
      console.log(picture);
      const requestInscriptionUser = axios.post(`${urlAPI}api/user/register`, {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname,
        birth_date: birthday,
        nickname: nickname,
        biography: description,
        image_file: JSON.stringify(picture),
        address: adress,
        skill: skills,
        city: town,
        zip_code: zip,
      });
      axios
        .all([requestInscriptionUser, requestPicture])
        .then(
          axios.spread((...responses) => {
            console.log(responses[0], responses[1]);
          })
        )
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

export default inscriptionMiddleware;
