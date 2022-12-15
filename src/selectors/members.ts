import { User } from '../components/Cards/ProfilesCards';
import { Skills } from '../components/SkillsSelect';

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

/**
 * Transform skills array from state on ids array skill from DB
 * @param arrayOfSkills array of skills user like this [{ value: 1, label: Ménage}]
 * @returns {Array} of ids skills like this [1, 3, 4]
 */
export function arrayIdsSkills(arrayOfSkills: Skills[]): number[] {
  const id: number[] = [];
  arrayOfSkills.map((skill: Skills) => id.push(skill.value));
  return id;
}
