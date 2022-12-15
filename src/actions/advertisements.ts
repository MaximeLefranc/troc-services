/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const FETCH_ADVERTISEMENTS_SKILLS_AND_USERS =
  'FETCH_ADVERTISEMENTS_SKILLS_AND_USERS';
export const ADD_ADVERTS_IN_STATE = 'ADD_ADVERTS_IN_STATE';
export const ADD_SKILLS_IN_STATE = 'ADD_SKILLS_IN_STATE';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/
/**
 * Fetch in DB a list of advertisements
 * @returns Object of action
 */
export function actionFetchAdvertsementsSkillsAndUsers() {
  return {
    type: FETCH_ADVERTISEMENTS_SKILLS_AND_USERS,
  };
}

/**
 * Save in state an array of adverts from the API
 * @param adverts list of all of adverts from API
 * @returns Object of action
 */
export function actionAddAdvertsInState(adverts: []) {
  return {
    type: ADD_ADVERTS_IN_STATE,
    payload: adverts,
  };
}

/**
 * Save in state an array of skilss from the API
 * @param {Array} skills list of skills from DB
 * @returns Object of action
 */
export function actionAddSkillsInState(skills: []) {
  return {
    type: ADD_SKILLS_IN_STATE,
    payload: skills,
  };
}
