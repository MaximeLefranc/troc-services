// ---- Axios Import ----
import axios from 'axios';

// ---- TypeScript Import ----
import { Middleware } from 'redux';

// ---- Actions Import ----
import { actionFetchAdvertsementsSkillsAndUsers } from '../actions/advertisements';
import {
  actionErrorMessageInscription,
  actionInscriptionError,
  actionInscriptionSuccess,
  actionSetInfoProfileInInputsState,
  EDIT_IN_DB_THIS_PROFILE_USER,
  FETCH_PROFILE_USER_FOR_MODIFICATION,
  SUBMIT_INSCRIPTION_FORM,
} from '../actions/inscription';
import { actionLogOut, actionToggleLoader } from '../actions/user';

// ---- Selector Import ----
import { arrayIdsSkills } from '../selectors/members';

// ---- Utils Import ----
import { getUrlApi } from '../utils/utils';

const inscriptionMiddleware: Middleware = (store) => (next) => (action) => {
  const urlAPI = getUrlApi();

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
  const formData = new FormData();
  formData.append('file', picture);

  switch (action.type) {
    case SUBMIT_INSCRIPTION_FORM: {
      store.dispatch(actionToggleLoader());

      const townToLowerCase = town.toLowerCase();
      const skillsIds = arrayIdsSkills(skills);

      axios
        .post(`${urlAPI}api/user/new`, {
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
          if (response.status === 201 && picture !== '') {
            axios
              .post(
                `${urlAPI}api/user/upload/${response.data.newUserId}`,
                formData
              )
              .then(() => {
                store.dispatch(
                  actionInscriptionSuccess(
                    'Inscription réussie, vous pouvez maintenant vous connecter'
                  )
                );
                setTimeout(() => {
                  window.location.href = `${window.location.origin}/accueil`;
                }, 2000);
              })
              .catch(() => {
                store.dispatch(
                  actionInscriptionError(
                    "Une erreur c'est produite, merci de réessayer"
                  )
                );
              });
          } else {
            store.dispatch(
              actionInscriptionSuccess(
                'Inscription réussie, vous pouvez maintenant vous connecter'
              )
            );
            setTimeout(() => {
              window.location.href = `${window.location.origin}/accueil`;
            }, 2000);
          }
        })
        .catch((error) => {
          store.dispatch(actionInscriptionError(error.response.data));
        })
        .finally(() => {
          store.dispatch(actionFetchAdvertsementsSkillsAndUsers());
          store.dispatch(actionToggleLoader());
        });

      return next(action);
    }

    case FETCH_PROFILE_USER_FOR_MODIFICATION: {
      axios
        .get(`${urlAPI}api/user/${localStorage.getItem('id_troc_services')}`)
        .then((response) => {
          store.dispatch(actionSetInfoProfileInInputsState(response.data));
        })
        .catch(() => {
          store.dispatch(
            actionErrorMessageInscription(
              'Problème lors de la récupération de vos informations, Merci de réessayer plus ultérieurement'
            )
          );
        });

      return next(action);
    }

    case EDIT_IN_DB_THIS_PROFILE_USER: {
      store.dispatch(actionToggleLoader());

      const token = localStorage.getItem('token_troc_services');
      const skillsIds = arrayIdsSkills(skills);
      const townToLowerCase = town.toLowerCase();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const bodyParameters = {
        email: email,
        first_name: firstname,
        last_name: lastname,
        birth_date: birthday,
        nickname: nickname.trim(),
        biography: description,
        address: adress,
        skill: skillsIds,
        city: townToLowerCase,
        zip_code: zip,
      };

      axios
        .put(
          `${urlAPI}api/user/${localStorage.getItem('id_troc_services')}/edit`,
          bodyParameters,
          config
        )
        .then((response) => {
          if (response.status === 206 && picture !== '') {
            axios
              .post(
                `${urlAPI}api/user/upload/${localStorage.getItem(
                  'id_troc_services'
                )}`,
                formData
              )
              .then(() => {
                store.dispatch(
                  actionInscriptionSuccess(
                    'Les modifications de votre profil on étaient réalisées avec succès. Merci de vous reconnecter'
                  )
                );
                setTimeout(() => {
                  window.location.href = `${window.location.origin}/accueil`;
                  store.dispatch(actionLogOut());
                }, 2000);
              })
              .catch(() => {
                store.dispatch(
                  actionInscriptionError(
                    "Une erreur c'est produite, merci de réessayer"
                  )
                );
              });
          } else {
            store.dispatch(
              actionInscriptionSuccess(
                'Les modifications de votre profil on étaient réalisées avec succès. Merci de vous reconnecter'
              )
            );
            setTimeout(() => {
              window.location.href = `${window.location.origin}/accueil`;
              store.dispatch(actionLogOut());
            }, 2000);
          }
        })
        .catch(() => {
          store.dispatch(
            actionInscriptionError(
              "Une erreur c'est produite, merci de réessayer"
            )
          );
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

export default inscriptionMiddleware;
