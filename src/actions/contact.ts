/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_CONTACT = 'CHANGE_INPUT_VALUE_CONTACT';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const SUBMIT_CONTACT_SUCCESS = 'SUBMIT_CONTACT_SUCCESS';
export const MESSAGE_SYSTEM = 'MESSAGE_SYSTEM';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Change the value's inpputs of contact state
 * @param value  value input
 * @param nameStateInput name of input in contact state
 * @returns Object Action
 */
export function actionChangeInputValueContact(
  value: string | File,
  nameStateInput: string
) {
  return {
    type: CHANGE_INPUT_VALUE_CONTACT,
    payload: {
      newValue: value,
      input: nameStateInput,
    },
  };
}

/**
 * Fetch POST to API the contact form
 * @returns Object Action
 */
export function actionSubmitContactForm() {
  return {
    type: SUBMIT_CONTACT_FORM,
  };
}

/**
 * Inscription success
 * @param message content of message
 * @returns Object Action
 */
export function actionSubmitContactSuccess() {
  return {
    type: SUBMIT_CONTACT_SUCCESS,
  };
}

/**
 * Set a error message inscription in state
 * @param message error message to set in state
 * @returns Object Action
 */
export function actionMessageSystem(messageSystem: string) {
  return {
    type: MESSAGE_SYSTEM,
    payload: messageSystem,
  };
}
