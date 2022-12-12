/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';

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
export function actionChangeInputValue(value: string, nameStateInput: string) {
  return {
    type: CHANGE_INPUT_VALUE,
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
