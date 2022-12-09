/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const CHANGE_INPUT_VALUE_INSCRIPTION = 'CHANGE_INPUT_VALUE_INSCRIPTION';
export const SUBMIT_INSCRIPTION_FORM = 'SUBMIT_INSCRIPTION_FORM';
export const ERROR_MESSAGE_INSCIPTION = 'ERROR_MESSAGE_INSCIPTION';

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
