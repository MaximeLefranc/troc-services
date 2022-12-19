/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_CONTACT = 'CHANGE_INPUT_VALUE_CONTACT';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';

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
 * Fetch POST to API the inscription form
 * @returns Object Action
 */
export function actionSubmitContactForm() {
  return {
    type: SUBMIT_CONTACT_FORM,
  };
}
