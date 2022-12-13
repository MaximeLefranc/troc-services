/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const CHANGE_INPUT_VALUE_CONNECTION = 'CHANGE_INPUT_VALUE_CONNECTION';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const FETCH_AUTHENT_USER = 'FETCH_AUTHENT_USER';

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
  console.log(value);
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
