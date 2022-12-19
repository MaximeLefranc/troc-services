import { MultiValue } from 'react-select';
import { Skills } from '../components/SkillsSelect';
import { InscriptionState } from '../reducers/inscription';

/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const CHANGE_INPUT_VALUE_INSCRIPTION = 'CHANGE_INPUT_VALUE_INSCRIPTION';
export const ADD_INSCRIPTION_SKILLS_IN_STATE =
  'ADD_INSCRIPTION_SKILLS_IN_STATE';
export const SUBMIT_INSCRIPTION_FORM = 'SUBMIT_INSCRIPTION_FORM';
export const ERROR_MESSAGE_INSCIPTION = 'ERROR_MESSAGE_INSCIPTION';
export const INSCRIPTION_SUCCESS = 'INSCRIPTION_SUCCESS';
export const INSCRIPTION_ERROR = 'INSCRIPTION_ERROR';
export const FETCH_PROFILE_USER_FOR_MODIFICATION =
  'FETCH_PROFILE_USER_FOR_MODIFICATION';
export const SET_INFO_PROFILE_IN_INPUTS_STATE =
  'SET_INFO_PROFILE_IN_INPUTS_STATE';
export const EDIT_IN_DB_THIS_PROFILE_USER = 'EDIT_IN_DB_THIS_PROFILE_USER';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Change the value's inpputs of inscription state
 * @param value  value input
 * @param nameStateInput name of input in inscription state
 * @returns Object Action
 */
export function actionChangeInputValueInscription(
  value: string | File,
  nameStateInput: string
) {
  return {
    type: CHANGE_INPUT_VALUE_INSCRIPTION,
    payload: {
      newValue: value,
      input: nameStateInput,
    },
  };
}

/**
 * Fetch POST to API the inscription form
 * @returns Object Action
 */
export function actionSubmitInscriptionForm() {
  return {
    type: SUBMIT_INSCRIPTION_FORM,
  };
}

/**
 * Set a error message inscription in state
 * @param message error message to set in state
 * @returns Object Action
 */
export function actionErrorMessageInscription(message: string) {
  return {
    type: ERROR_MESSAGE_INSCIPTION,
    payload: message,
  };
}

/**
 * Set an array of skills in state for user inscription
 * @param skills of user inscription
 * @returns Object Action
 */
export function actionAddInscriptionSkills(skills: MultiValue<Skills>) {
  return {
    type: ADD_INSCRIPTION_SKILLS_IN_STATE,
    payload: skills,
  };
}

/**
 * Inscription success
 * @param message content of message
 * @returns Object Action
 */
export function actionInscriptionSuccess(message: string) {
  return {
    type: INSCRIPTION_SUCCESS,
    payload: message,
  };
}

/**
 * Inscription failed
 * @returns Object Action
 */
export function actionInscriptionError() {
  return {
    type: INSCRIPTION_ERROR,
  };
}

/**
 * Fetch in DB info of one user to be able to modify the profile
 * @returns Object Action
 */
export function actionFetchProfileForModification() {
  return {
    type: FETCH_PROFILE_USER_FOR_MODIFICATION,
  };
}

/**
 * Save in inputs inscription state the user info, ready for modification
 * @param data info of one member
 * @returns Object Action
 */
export function actionSetInfoProfileInInputsState(data: InscriptionState) {
  return {
    type: SET_INFO_PROFILE_IN_INPUTS_STATE,
    payload: data,
  };
}

/**
 * edit in DB this profile user
 * @returns Object Action
 */
export function actionEditInDbThisProfileUser() {
  return {
    type: EDIT_IN_DB_THIS_PROFILE_USER,
  };
}
