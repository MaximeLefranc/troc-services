import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionInscriptionError,
  actionInscriptionSuccess,
  SUBMIT_INSCRIPTION_FORM,
} from '../actions/inscription';
import { actionToggleLoader } from '../actions/user';
import { arrayIdsSkills } from '../selectors/members';
// import { getBase64 } from '../utils/utils';

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
        // picture,
        email,
        adress,
        town,
        zip,
        description,
        skills,
        password,
      } = store.getState().inscription;
      // let name = '';
      // if (picture !== '') {
      //   name = picture.name;
      // }
      // const formData = new FormData();
      // formData.append('file', picture);
      // console.log(picture);
      // const requestPicture = axios.post(`${urlAPI}api/user/registerfile`);
      // const imageBase64 = getBase64(picture);
      // console.log(picture);
      const townToLowerCase = town.toLowerCase();
      console.log(townToLowerCase);
      const skillsIds = arrayIdsSkills(skills);
      const requestInscriptionUser = axios.post(`${urlAPI}api/user/register`, {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname,
        birth_date: birthday,
        nickname: nickname,
        biography: description,
        // target_image_file: formData,
        address: adress,
        skill: skillsIds,
        city: townToLowerCase,
        zip_code: zip,
      });
      axios
        .all([requestInscriptionUser])
        .then(
          axios.spread((...responses) => {
            if (responses[0].status === 201) {
              store.dispatch(actionInscriptionSuccess());
            }
          })
        )
        .catch((error) => {
          store.dispatch(actionInscriptionError());
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
