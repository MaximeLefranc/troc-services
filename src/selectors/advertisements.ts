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
): Adverts | false {
  if (typeof searchedSlug === 'string') {
    const id = parseInt(searchedSlug);
    const advert = listOfAdverts.find(
      (advertElement: Adverts) => advertElement.id === id
    );
    if (advert) {
      return advert;
    } else {
      return false;
    }
  }
  return false;
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

// export function findAdvertsBySkills(listOfAdverts: [], searchedSlug: string) {
//   const advertList = listOfAdverts.filter((el: string) => el === searchedSlug);
//   return advertList;
// }
