import { MultiValue } from 'react-select';
import { Skills } from '../components/SkillsSelect';

/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const FETCH_ADVERTISEMENTS_SKILLS_AND_USERS =
  'FETCH_ADVERTISEMENTS_SKILLS_AND_USERS';
export const ADD_ADVERTS_IN_STATE = 'ADD_ADVERTS_IN_STATE';
export const ADD_SKILLS_IN_STATE = 'ADD_SKILLS_IN_STATE';
export const CHANGE_INPUT_VALUE_NEW_ADVERT = 'CHANGE_INPUT_VALUE_NEW_ADVERT';
export const ADD_SKILLS_NEW_ADVERT = 'ADD_SKILLS_NEW_ADVERT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SUBMIT_NEW_ADVERT = 'SUBMIT_NEW_ADVERT';
export const SUBMIT_NEW_ADVERT_ERROR = 'SUBMIT_NEW_ADVERT_ERROR';

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

/**
 * Change the value's inputs of advertisements state for new advert
 * @param newValue  value input
 * @param nameInput name of input in advertisements state
 * @returns Object Action
 */
export function actionChangeInputValueNewAdvert(
  newValue: string | File,
  nameInput: string
) {
  return {
    type: CHANGE_INPUT_VALUE_NEW_ADVERT,
    payload: {
      nameInput: nameInput,
      newValue: newValue,
    },
  };
}

/**
 * Set an array of skills in state for new advert
 * @param skills of new advert
 * @returns Object Action
 */
export function actionAddSkillsNewAdvert(skills: MultiValue<Skills>) {
  return {
    type: ADD_SKILLS_NEW_ADVERT,
    payload: skills,
  };
}

/**
 * Set a message in state advertisemnt for newadvert
 * @param message to return
 * @returns Object Action
 */
export function actionAddMessage(message: string) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}

/**
 * Fetch POST to API the new Advert form
 * @returns Object Action
 */
export function actionSubmitNewAdvert() {
  return {
    type: SUBMIT_NEW_ADVERT,
  };
}

/**
 * Erreur from API when a user add an advert
 * @returns Object Action
 */
export function actionSubmitNewAdvertError() {
  return {
    type: SUBMIT_NEW_ADVERT_ERROR,
  };
}
