import { Adverts } from '../components/Cards/AdvertsCards';

/**
 * Search in Advertissements state one advert by this ID
 * @param listOfAdverts Advertisements array in state
 * @param searchedSlug  ID of advertisement to searched
 * @returns {Array | false} One advert or false if doen't exist
 */
export function findAdvert(
  listOfAdverts: [],
  searchedSlug: string | undefined
): Adverts | string | void {
  let advertFiltered: Adverts[] | undefined = [];
  if (typeof searchedSlug === 'string') {
    const id = parseInt(searchedSlug);
    advertFiltered = listOfAdverts.find(
      (advertElement: Adverts) => advertElement.id === id
    );
    if (typeof advertFiltered === 'undefined') {
      return 'not found';
    }
    return advertFiltered;
  }
}

/**
 * Search in Advertissements state advert with this name Skills
 * @param listOfAdverts Advertisements array in state
 * @param searchedSlug  Name(Skills) of advertisement to searched
 * @returns {Adverts[] | false} Array of advert or false if doen't exist
 */
export function findAdvertsBySkills(
  listOfAdverts: [],
  searchedSlug: string | undefined
): Adverts[] | false {
  if (typeof searchedSlug === 'string') {
    const advertFiltered: Adverts[] = [];
    listOfAdverts.filter((advertElement: Adverts) => {
      advertElement.skills.forEach((skill) => {
        if (skill.name === searchedSlug) {
          advertFiltered.push(advertElement);
        }
      });
    });
    if (advertFiltered.length > 0) {
      return advertFiltered;
    } else {
      return false;
    }
  }
  return false;
}
