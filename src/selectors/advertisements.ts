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
