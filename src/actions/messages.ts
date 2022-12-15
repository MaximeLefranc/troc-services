/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_MESSAGE = 'CHANGE_INPUT_VALUE_MESSAGE';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Change the value's inpputs of messages state
 * @param value  value input
 * @param nameStateInput name of input in messages state
 * @returns Object Action
 */
export function actionChangeInputValueMessage(
  value: string | File,
  nameStateInput: string
) {
  return {
    type: CHANGE_INPUT_VALUE_MESSAGE,
    payload: {
      newValue: value,
      input: nameStateInput,
    },
  };
}
