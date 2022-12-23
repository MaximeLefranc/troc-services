/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_CONTACT = 'CHANGE_INPUT_VALUE_CONTACT';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const SUBMIT_CONTACT_SUCCESS = 'SUBMIT_CONTACT_SUCCESS';
export const MESSAGE_SYSTEM = 'MESSAGE_SYSTEM';
export const SAVE_SEND_CONTACT_FORM = 'SAVE_SEND_CONTACT_FORM';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Change the inputs value's state of contact
 * @param value  input value
 * @param nameStateInput input name in contact state
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
 * Submit Form Contact success
 * @param message content of message
 * @returns Object Action
 */
export function actionSubmitContactSuccess() {
  return {
    type: SUBMIT_CONTACT_SUCCESS,
  };
}

/**
 * Set a message system for state of contact
 * @param message error message to set in state
 * @returns Object Action
 */
export function actionMessageSystem(messageSystem: string) {
  return {
    type: MESSAGE_SYSTEM,
    payload: messageSystem,
  };
}

/**
 * Send Empty array of contact form for clean the form
 * @param sendForm  Array of contact form
 * @returns Object Action
 */
export function actionCleanContactForm(sendForm: []) {
  return {
    type: SAVE_SEND_CONTACT_FORM,
    payload: sendForm,
  };
}
