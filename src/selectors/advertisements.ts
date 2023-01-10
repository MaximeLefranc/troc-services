// ---- Typecript Import ----
import { Adverts } from '../components/Cards/AdvertsCards';

// ---- Utils Import ----
import { strNoAccent } from '../utils/utils';

/**
 * Search in Advertissements state one advert by this ID
 * @param listOfAdverts Advertisements array in state
 * @param searchedSlug  ID of advertisement to searched
 * @returns {Array | false} One advert or false if doen't exist
 */
export function findAdvert(
  listOfAdverts: Adverts[],
  searchedSlug: string | undefined
): Adverts | string | void {
  if (typeof searchedSlug === 'string') {
    const id = parseInt(searchedSlug);
    const advertFiltered = listOfAdverts.find(
      (advertElement: Adverts) => advertElement.id === id
    );
    if (typeof advertFiltered === 'undefined') {
      return 'not found';
    }
    return advertFiltered;
  }
}

/**
 * Search in Advertissements state one advert with this name Skills
 * @param listOfAdverts Advertisements array in state
 * @param searchedSlug  Name(Skills) of advertisement to searched
 * @returns {Adverts[] | false} Array of advert or false if doen't exist
 */
export function findAdvertsBySkills(
  listOfAdverts: Adverts[],
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

/**
 * Search in Advertissements state advert with this name Skills and/or the zipCode
 * @param listOfAdverts Advertisements array in state
 * @param searchedSkill  Skill of advertisement to searched
 * @param searchedZipCode  zipCode of advertisement to searched
 * @returns {Adverts[] | false} Array of advert or false if doen't exist
 */
export function findAdvertsBySearchBar(
  listOfAdverts: Adverts[],
  searchedSkill: string | undefined,
  searchedZipCode: string | undefined
): Adverts[] | false {
  if (
    typeof searchedSkill === 'string' &&
    typeof searchedZipCode === 'string'
  ) {
    const advertFiltered: Adverts[] = [];
    const searchedSkillClean = strNoAccent(searchedSkill).toLowerCase().trim();
    const searchedZipCodeClean = searchedZipCode.trim();
    listOfAdverts.filter((advertElement: Adverts) => {
      if (searchedZipCode !== '' && searchedSkill === '') {
        if (searchedZipCodeClean === advertElement.user.zip_code.trim()) {
          advertFiltered.push(advertElement);
        }
      }
      if (searchedSkill !== '' && searchedZipCode === '') {
        advertElement.skills.forEach((skill) => {
          const skillClean = strNoAccent(skill.name).toLowerCase().trim();
          if (skillClean === searchedSkillClean.replace("'", '')) {
            advertFiltered.push(advertElement);
          }
        });
      }
      if (searchedZipCode !== '' && searchedSkill !== '') {
        advertElement.skills.forEach((skill) => {
          const skillClean = strNoAccent(skill.name).toLowerCase().trim();
          if (
            skillClean === searchedSkillClean.replace("'", '') &&
            searchedZipCodeClean === advertElement.user.zip_code.trim()
          ) {
            advertFiltered.push(advertElement);
          }
        });
      }
    });
    if (advertFiltered.length > 0) {
      return advertFiltered;
    } else {
      return false;
    }
  }
  return false;
}
