// ---- Typecript Import ----
import { User } from '../components/Cards/ProfilesCards';
import { Skills } from '../components/SkillsSelect';

// ---- Utils Import ----
import { strNoAccent } from '../utils/utils';

/**
 * Search in User state one member by this nickname
 * @param listOfMembers members array in state
 * @param searchedSlug  pseudo of member to searched
 * @returns {Array | false} One member or false if doen't exist
 */
export function findMember(
  listOfMembers: User[],
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
 * Search in User state one member with this name skill
 * @param memberList Members array in state
 * @param searchedSlug Name(Skills) of member to searched
 * @returns @returns {User[] | false} Array of members or false if doen't exist
 */
export function findMembersBySkills(
  memberList: User[],
  searchedSlug: string | undefined
): User[] | false {
  if (typeof searchedSlug === 'string') {
    const memberFiltered: User[] = [];
    memberList.filter((memberElement: User) => {
      memberElement.skill.forEach((skill) => {
        if (skill.name === searchedSlug) {
          memberFiltered.push(memberElement);
        }
      });
    });
    if (memberFiltered.length > 0) {
      return memberFiltered;
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

/**
 * Search in User state one member by this ID
 * @param listOfMembers members array in state
 * @param searchedSlugId  id of member to searched
 * @returns {Array | false} One member or false if doen't exist
 */
export function findMemberById(
  listOfMembers: User[],
  searchedSlugId: string | undefined
): User | false {
  if (typeof searchedSlugId === 'string') {
    const id = parseInt(searchedSlugId);
    const member = listOfMembers.find(
      (memberElement: User) => memberElement.id === id
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
 * Search all of members from searchbar
 * with this name Skills and/or the zipCode
 * @param listOfMembers Members array in state
 * @param searchedSkill  Skill of advertisement to searched
 * @param searchedZipCode  zipCode of advertisement to searched
 * @returns {User[] | false} Array of advert or false if doen't exist
 */
export function findMembersBySearchBar(
  listOfMembers: User[],
  searchedSkill: string | undefined,
  searchedZipCode: string | undefined
): User[] | false {
  if (
    typeof searchedSkill === 'string' &&
    typeof searchedZipCode === 'string'
  ) {
    const membersFiltered: User[] = [];
    const searchedSkillClean = strNoAccent(searchedSkill).toLowerCase().trim();
    const searchedZipCodeClean = searchedZipCode.trim();

    listOfMembers.filter((memberElement: User) => {
      if (searchedZipCode !== '' && searchedSkill === '') {
        if (searchedZipCodeClean === memberElement.zip_code.trim()) {
          membersFiltered.push(memberElement);
        }
      }
      if (searchedSkill !== '' && searchedZipCode === '') {
        memberElement.skill.forEach((skill) => {
          const skillClean = strNoAccent(skill.name).toLowerCase().trim();
          if (skillClean === searchedSkillClean.replace("'", '')) {
            membersFiltered.push(memberElement);
          }
        });
      }
      if (searchedZipCode !== '' && searchedSkill !== '') {
        memberElement.skill.forEach((skill) => {
          const skillClean = strNoAccent(skill.name).toLowerCase().trim();
          if (
            skillClean === searchedSkillClean.replace("'", '') &&
            searchedZipCodeClean === memberElement.zip_code.trim()
          ) {
            membersFiltered.push(memberElement);
          }
        });
      }
    });
    if (membersFiltered.length > 0) {
      return membersFiltered;
    } else {
      return false;
    }
  }
  return false;
}

/**
 * Check if this member are an admin.
 * @param roles Array of role user
 * @returns {boolean} true or false
 */
export function isHeAdmin(roles: string[]): boolean {
  const admin = roles.find((role) => role === 'ROLE_ADMIN');
  if (admin) {
    return true;
  } else {
    return false;
  }
}
