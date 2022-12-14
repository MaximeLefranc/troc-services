import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAddAdvertsInState,
  actionAddSkillsInState,
  FETCH_ADVERTISEMENTS_AND_SKILLS_FOR_MAIN_PAGE,
} from '../actions/advertisements';
import { actionToggleLoader } from '../actions/user';

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
console.log(process.env);

const advertsMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVERTISEMENTS_AND_SKILLS_FOR_MAIN_PAGE:
      store.dispatch(actionToggleLoader());
      const requestAdverts = axios.get(`${urlAPI}api/advertisements`);
      const requestSkills = axios.get(`${urlAPI}api/categories`);
      axios
        .all([requestAdverts, requestSkills])
        .then(
          axios.spread((...responses) => {
            const adverts = responses[0];
            const skills = responses[1];
            store.dispatch(actionAddAdvertsInState(adverts.data));
            store.dispatch(actionAddSkillsInState(skills.data));
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

export default advertsMiddleware;
