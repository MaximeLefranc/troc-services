import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAddAdvertsInState,
  actionAddSkillsInState,
  actionFetchAdvertsementsSkillsAndUsers,
  actionSubmitNewAdvertError,
  FETCH_ADVERTISEMENTS_SKILLS_AND_USERS,
  SUBMIT_NEW_ADVERT,
} from '../actions/advertisements';
import {
  actionSaveAllMemebersInState,
  actionToggleLoader,
} from '../actions/user';
import { arrayIdsSkills } from '../selectors/members';
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

    case SUBMIT_NEW_ADVERT:
      store.dispatch(actionToggleLoader());

      const { titleInput, picture, descriptionInput, skills } =
        store.getState().advertisements;
      const token = localStorage.getItem('token_troc_services');
      const skillsIds = arrayIdsSkills(skills);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const formData = new FormData();
      formData.append('file', picture);
      const bodyParameters = {
        title: titleInput,
        content: descriptionInput,
        skills: skillsIds,
        file: formData,
      };

      axios
        .post(`${urlAPI}api/advertisements/add`, bodyParameters, config)
        .then((response) => {
          console.log(response);
          // if (response.status === 201 && picture !== '') {
          //   const formData = new FormData();
          //   formData.append('file', picture);
          //   axios
          //     .post(
          //       `${urlAPI}api/advertisements/upload/${response.data.newAdvertId}`,
          //       formData
          //     )
          //     .then((responsePicture) => {
          //       console.log(responsePicture);
          //     })
          //     .catch((error) => {
          //       console.error(error);
          //     });
          // }
        })
        .catch((error) => {
          store.dispatch(actionSubmitNewAdvertError());
        })
        .finally(() => {
          store.dispatch(actionFetchAdvertsementsSkillsAndUsers());
          store.dispatch(actionToggleLoader());
        });
      return next(action);

    default:
      return next(action);
  }
};

export default advertsMiddleware;
