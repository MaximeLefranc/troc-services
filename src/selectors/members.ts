import { User } from '../components/Cards/ProfilesCards';

/**
 * Search in User state one memeber by this ID
 * @param listOfMembers Advertisements array in state
 * @param searchedSlug  pseudo of member to searched
 * @returns {Array | false} One member or false if doen't exist
 */
export function findMember(
  listOfMembers: [],
  searchedSlug: string | undefined
): User | false {
  if (typeof searchedSlug === 'string') {
    const member = listOfMembers.find(
      (memberElement: User) => memberElement.nickname === searchedSlug
    );
    if (member) {
      return member;
    } else {
      return false;
    }
  }
  return false;
}
