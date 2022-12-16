import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAddAdvertsInState,
  actionAddSkillsInState,
  FETCH_ADVERTISEMENTS_SKILLS_AND_USERS,
} from '../actions/advertisements';
import {
  actionSaveAllMemebersInState,
  actionToggleLoader,
} from '../actions/user';
import { getUrlApi } from '../utils/utils';

const urlAPI = getUrlApi();

const advertsMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ADVERTISEMENTS_SKILLS_AND_USERS:
      store.dispatch(actionToggleLoader());
      const requestAdverts = axios.get(`${urlAPI}api/advertisements`);
      const requestSkills = axios.get(`${urlAPI}api/categories`);
      const requestMembers = axios.get(`${urlAPI}api/user`);
      axios
        .all([requestAdverts, requestSkills, requestMembers])
        .then(
          axios.spread((...responses) => {
            const adverts = responses[0].data;
            const skills = responses[1].data;
            const members = responses[2].data;
            store.dispatch(actionAddAdvertsInState(adverts));
            store.dispatch(actionAddSkillsInState(skills));
            store.dispatch(actionSaveAllMemebersInState(members));
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
