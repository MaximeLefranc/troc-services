/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const CHANGE_INPUT_VALUE_CONNECTION = 'CHANGE_INPUT_VALUE_CONNECTION';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const SAVE_ALL_MEMBERS_IN_STATE = 'SAVE_ALL_MEMBERS_IN_STATE';
export const FETCH_AUTHENT_USER = 'FETCH_AUTHENT_USER';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';
export const AUTHENT_ERROR = 'AUTHENT_ERROR';
export const HAVE_TOKEN_IN_LOCALSTORAGE = 'HAVE_TOKEN_IN_LOCALSTORAGE';
export const LOG_OUT = 'LOG_OUT';
export const DELETE_PROFILE = 'DELETE_PROFILE';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Turn in true or false the toggleLogInForm in state.user
 * @returns Object Action
 */
export function actionToggleLogInForm() {
  return {
    type: TOGGLE_LOGIN_FORM,
  };
}

/**
 * Change the value of email or password user state
 * @param value  value input
 * @param nameStateInput name of input in state (email or password)
 * @returns Object Action
 */

export function actionChangeInputValueConnection(
  value: string,
  nameStateInput: string
) {
  return {
    type: CHANGE_INPUT_VALUE_CONNECTION,
    payload: {
      newValue: value,
      input: nameStateInput,
    },
  };
}

/**
 * Turn in true or false the state isLoading in state.user
 * @returns Object Action
 */
export function actionToggleLoader() {
  return {
    type: TOGGLE_LOADER,
  };
}

/**
 * Look if this user is registred in DB
 * @returns Object Action
 */
export function actionFetchAuthentUser() {
  return {
    type: FETCH_AUTHENT_USER,
  };
}

/**
 * Action that will save user information in state and local storage
 * @param pseudo pseudo of user in DB
 * @param token token of user in DB
 * @param id id of user
 * @returns Object Action
 */
export function actionAuthentSuccess(
  pseudo: string,
  token: string,
  id: number
) {
  return {
    type: AUTHENT_SUCCESS,
    payload: {
      pseudo: pseudo,
      token: token,
      id: id,
    },
  };
}

/**
 * Message error connection invalid email or wrong password
 * @param message string, detail of error connection
 * @returns Object Action
 */
export function actionAuthentError(message: string) {
  return {
    type: AUTHENT_ERROR,
    payload: message,
  };
}

/**
 * Check in localStorage if token exist
 * @returns Object Action
 */
export function actionHaveTokenInLocalstorage() {
  return {
    type: HAVE_TOKEN_IN_LOCALSTORAGE,
  };
}

/**
 * Disconnects a user and deletes his token in localstorage
 * @returns Object Action
 */
export function actionLogOut() {
  return {
    type: LOG_OUT,
  };
}

/**
 * Save in state a list of members from API
 * @param listOfMembers Array of members from API
 * @returns Object Action
 */
export function actionSaveAllMemebersInState(listOfMembers: []) {
  return {
    type: SAVE_ALL_MEMBERS_IN_STATE,
    payload: listOfMembers,
  };
}

/**
 * Delete profile user in DB
 * @returns Object Action
 */
export function actionDeleteProfile() {
  return {
    type: DELETE_PROFILE,
  };
}
