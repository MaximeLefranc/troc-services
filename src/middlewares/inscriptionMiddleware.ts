import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionInscriptionError,
  actionInscriptionSuccess,
  SUBMIT_INSCRIPTION_FORM,
} from '../actions/inscription';
import { actionToggleLoader } from '../actions/user';
import { arrayIdsSkills } from '../selectors/members';

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
      const townToLowerCase = town.toLowerCase();
      console.log(townToLowerCase);
      const skillsIds = arrayIdsSkills(skills);
      axios
        .post(`${urlAPI}api/user/register`, {
          email: email,
          password: password,
          first_name: firstname,
          last_name: lastname,
          birth_date: birthday,
          nickname: nickname.trim(),
          biography: description,
          address: adress,
          skill: skillsIds,
          city: townToLowerCase,
          zip_code: zip,
        })
        .then((response) => {
          if (response.status === 200 && picture !== '') {
            const formData = new FormData();
            formData.append('file', picture);
            axios
              .post(
                `${urlAPI}api/user/upload/${response.data.newUserId}`,
                formData
              )
              .then(() => {
                store.dispatch(actionInscriptionSuccess());
              })
              .catch(() => {
                store.dispatch(actionInscriptionError());
              });
          } else {
            store.dispatch(actionInscriptionSuccess());
          }
        })
        .catch(() => {
          store.dispatch(actionInscriptionError());
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
