/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_SEARCHBAR = 'CHANGE_INPUT_VALUE_SEARCHBAR';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Change the value's inpputs of searchBar state
 * @param value  value input
 * @param nameStateInput name of input in searchBar state
 * @returns Object Action
 */
export function actionChangeInputValueSearchBar(
  value: string,
  nameStateInput: string
) {
  return {
    type: CHANGE_INPUT_VALUE_SEARCHBAR,
    payload: {
      newValue: value,
      input: nameStateInput,
    },
  };
}
