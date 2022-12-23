import axios from 'axios';
import { Middleware } from 'redux';
import {
  actionAddAdvertsInState,
  actionAddSkillsInState,
  actionFetchAdvertsementsSkillsAndUsers,
  actionSetInfoAdvertInInputsState,
  actionSubmitNewAdvertError,
  actionToggleSubmitSuccess,
  DELETE_ADVERT,
  EDIT_IN_DB_THIS_ADVERT,
  FETCH_ADVERTISEMENTS_SKILLS_AND_USERS,
  FETCH_ADVERT_FOR_MODIFICATION,
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
  const { titleInput, picture, descriptionInput, skills } =
    store.getState().advertisements;
  const skillsIds = arrayIdsSkills(skills);
  const bodyParameters = {
    title: titleInput,
    content: descriptionInput,
    skills: skillsIds,
    approved: false,
  };
  const formData = new FormData();
  formData.append('file', picture);
  switch (action.type) {
    case FETCH_ADVERTISEMENTS_SKILLS_AND_USERS: {
      store.dispatch(actionToggleLoader());

      const requestAdverts = axios.get(`${urlAPI}api/advertisements`);
      const requestSkills = axios.get(`${urlAPI}api/categories`);
      const requestMembers = axios.get(`${urlAPI}api/user`);

      axios
        .all([requestAdverts, requestSkills, requestMembers])
        .then(
          axios.spread((...responses) => {
            const adverts = responses[0].data;
            const skillsOfAdverts = responses[1].data;
            const members = responses[2].data;
            store.dispatch(actionAddAdvertsInState(adverts));
            store.dispatch(actionAddSkillsInState(skillsOfAdverts));
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
    }
    case SUBMIT_NEW_ADVERT: {
      store.dispatch(actionToggleLoader());
      const token = localStorage.getItem('token_troc_services');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .post(`${urlAPI}api/advertisements/new`, bodyParameters, config)
        .then((response) => {
          if (response.status === 201 && picture !== '') {
            axios
              .post(
                `${urlAPI}api/advertisements/upload/${response.data.newAdvertId}`,
                formData
              )
              .then(() => {
                store.dispatch(
                  actionToggleSubmitSuccess(
                    true,
                    'Annonce déposée avec succès.'
                  )
                );
                setTimeout(() => {
                  window.location.href = `${window.location.origin}/accueil`;
                }, 2000);
              })
              .catch(() => {
                store.dispatch(actionSubmitNewAdvertError());
              });
          } else {
            store.dispatch(
              actionToggleSubmitSuccess(true, 'Annonce déposée avec succès.')
            );
            setTimeout(() => {
              window.location.href = `${window.location.origin}/accueil`;
            }, 2000);
          }
        })
        .catch(() => {
          store.dispatch(actionSubmitNewAdvertError());
        })
        .finally(() => {
          store.dispatch(actionFetchAdvertsementsSkillsAndUsers());
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    }
    case FETCH_ADVERT_FOR_MODIFICATION: {
      store.dispatch(actionToggleLoader());
      axios
        .get(`${urlAPI}api/advertisements/${action.payload}`)
        .then((response) => {
          store.dispatch(
            actionSetInfoAdvertInInputsState(response.data.advertisements)
          );
        })
        .catch(() => {
          store.dispatch(actionSubmitNewAdvertError());
        })
        .finally(() => {
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    }
    case EDIT_IN_DB_THIS_ADVERT: {
      store.dispatch(actionToggleLoader());
      const token = localStorage.getItem('token_troc_services');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .put(
          `${urlAPI}api/advertisements/${action.payload}/edit`,
          bodyParameters,
          config
        )
        .then((response) => {
          if (response.status === 206 && picture !== '') {
            axios
              .post(
                `${urlAPI}api/advertisements/upload/${action.payload}`,
                formData
              )
              .then(() => {
                store.dispatch(actionToggleSubmitSuccess(true));
              })
              .catch(() => {
                store.dispatch(actionSubmitNewAdvertError());
              });
          }
        })
        .catch(() => {
          store.dispatch(actionSubmitNewAdvertError());
        })
        .finally(() => {
          store.dispatch(actionFetchAdvertsementsSkillsAndUsers());
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    }
    case DELETE_ADVERT: {
      store.dispatch(actionToggleLoader());
      const token = localStorage.getItem('token_troc_services');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .put(
          `${urlAPI}api/advertisements/${action.payload}/edit`,
          {
            is_hidden: true,
          },
          config
        )
        .then(() => {
          window.location.href = `${window.location.origin}/accueil`;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(actionFetchAdvertsementsSkillsAndUsers());
          store.dispatch(actionToggleLoader());
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default advertsMiddleware;
