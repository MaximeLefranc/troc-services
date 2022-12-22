import { Adverts } from '../components/Cards/AdvertsCards';
import { User } from '../components/Cards/ProfilesCards';

/*=====================================
============ACTIONS TYPES==============
=======================================*/
export const CHANGE_INPUT_VALUE_SEARCHBAR = 'CHANGE_INPUT_VALUE_SEARCHBAR';
export const SAVE_RESULT_OF_RESEARCH_ADVERTS =
  'SAVE_RESULT_OF_RESEARCH_ADVERTS';
export const SAVE_RESULT_OF_RESEARCH_MEMBERS =
  'SAVE_RESULT_OF_RESEARCH_MEMBERS';

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

/**
 * Save in state an advert array of user's research
 * @param resultResearch  Array of result to research
 * @returns Object Action
 */
export function actionSaveResultOfResearchAdverts(resultResearch: Adverts[]) {
  return {
    type: SAVE_RESULT_OF_RESEARCH_ADVERTS,
    payload: resultResearch,
  };
}

/**
 * Save in state an members array of user's research
 * @param resultResearch  Array of result to research
 * @returns Object Action
 */
export function actionSaveResultOfResearchMembers(resultResearch: User[]) {
  return {
    type: SAVE_RESULT_OF_RESEARCH_MEMBERS,
    payload: resultResearch,
  };
}
