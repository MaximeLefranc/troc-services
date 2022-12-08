/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const FETCH_ADVERTISEMENTS_FOR_MAIN_PAGE =
  'FETCH_ADVERTISEMENTS_FOR_MAIN_PAGE';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/
/**
 * Fetch in DB a list of advertisements
 * @returns Object of action
 */
export function actionFetchAdvertsementsForMainPage() {
  return {
    type: FETCH_ADVERTISEMENTS_FOR_MAIN_PAGE,
  };
}
