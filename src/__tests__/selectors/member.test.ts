// ---- TypeScript Import ----
import { Skills } from '../../components/SkillsSelect';
import { User } from './../../components/Cards/ProfilesCards/index';

// ---- Selector Import ----
import {
  arrayIdsSkills,
  findMember,
  findMemberById,
  findMembersBySearchBar,
  findMembersBySkills,
  isHeAdmin,
} from '../../selectors/members';

/* =======================================
   =============== DATA ==================
   ======================================= */

const arrayMembers: User[] = [
  {
    biography: 'test',
    id: 1,
    nickname: 'Max',
    imageName: 'test.jpg',
    city: 'montpellier',
    zip_code: '34000',
    roles: ['ROLE_ADMIN', 'ROLE_USER'],
    advertisements: [
      {
        id: 1,
        title: 'Test title',
        content: 'Test content',
        imageName: 'test.jpg',
        isHidden: false,
        approved: true,
      },
    ],
    skill: [
      { id: 1, name: 'Jardinage' },
      { id: 2, name: 'Mécanique' },
    ],
  },
  {
    biography: 'test',
    id: 2,
    nickname: 'Fabien',
    imageName: 'test.jpg',
    city: 'béziers',
    zip_code: '34500',
    roles: ['ROLE_USER'],
    advertisements: [
      {
        id: 2,
        title: 'Test title',
        content: 'Test content',
        imageName: 'test.jpg',
        isHidden: false,
        approved: true,
      },
    ],
    skill: [
      { id: 3, name: 'Courses' },
      { id: 4, name: 'Electricité' },
    ],
  },
  {
    biography: 'test',
    id: 3,
    nickname: 'Dupont',
    imageName: 'test.jpg',
    city: 'montpellier',
    zip_code: '34000',
    roles: ['ROLE_USER'],
    advertisements: [
      {
        id: 3,
        title: 'Test title',
        content: 'Test content',
        imageName: 'test.jpg',
        isHidden: false,
        approved: true,
      },
    ],
    skill: [
      { id: 1, name: 'Jardinage' },
      { id: 2, name: 'Mécanique' },
    ],
  },
];

const member1: User = {
  biography: 'test',
  id: 1,
  nickname: 'Max',
  imageName: 'test.jpg',
  city: 'montpellier',
  zip_code: '34000',
  roles: ['ROLE_ADMIN', 'ROLE_USER'],
  advertisements: [
    {
      id: 1,
      title: 'Test title',
      content: 'Test content',
      imageName: 'test.jpg',
      isHidden: false,
      approved: true,
    },
  ],
  skill: [
    { id: 1, name: 'Jardinage' },
    { id: 2, name: 'Mécanique' },
  ],
};

const member2: User = {
  biography: 'test',
  id: 2,
  nickname: 'Fabien',
  imageName: 'test.jpg',
  city: 'béziers',
  zip_code: '34500',
  roles: ['ROLE_USER'],
  advertisements: [
    {
      id: 2,
      title: 'Test title',
      content: 'Test content',
      imageName: 'test.jpg',
      isHidden: false,
      approved: true,
    },
  ],
  skill: [
    { id: 3, name: 'Courses' },
    { id: 4, name: 'Electricité' },
  ],
};

const member3: User = {
  biography: 'test',
  id: 3,
  nickname: 'Dupont',
  imageName: 'test.jpg',
  city: 'montpellier',
  zip_code: '34000',
  roles: ['ROLE_USER'],
  advertisements: [
    {
      id: 3,
      title: 'Test title',
      content: 'Test content',
      imageName: 'test.jpg',
      isHidden: false,
      approved: true,
    },
  ],
  skill: [
    { id: 1, name: 'Jardinage' },
    { id: 2, name: 'Mécanique' },
  ],
};

const skillsFromState: Skills[] = [
  {
    value: 1,
    label: 'Jardinage',
  },
  {
    value: 2,
    label: 'Mécanique',
  },
  {
    value: 3,
    label: 'Courses',
  },
  {
    value: 4,
    label: 'Electricité',
  },
];

/* =======================================
   =============== TESTS =================
   ======================================= */

describe('Test function findMember(): Find a member by this nickname', () => {
  test('called with a wrong slug should return false', () => {
    expect(findMember(arrayMembers, 'unknown pseudo slug')).toBeFalsy();
  });
  test('called with a right slug, should return one Member', () => {
    expect(findMember(arrayMembers, 'Max')).toStrictEqual(member1);
  });
  test('called with an invalid type slug, should return false', () => {
    expect(findMember(arrayMembers, undefined)).toBeFalsy();
  });
});

describe('Test function findMemberById(): Find one member by this ID', () => {
  test('called with a wrong slug should return false', () => {
    expect(findMemberById(arrayMembers, 'unknown id slug')).toBeFalsy();
  });
  test('called with a right slug, should return one Member', () => {
    expect(findMemberById(arrayMembers, '1')).toStrictEqual(member1);
  });
  test('called with an invalid type slug, should return false', () => {
    expect(findMemberById(arrayMembers, undefined)).toBeFalsy();
  });
});

describe('Test function findMembersBySkills: Find array of members by skill name', () => {
  test('called with a skill name not present in arrayMembers, should return false', () => {
    expect(findMembersBySkills(arrayMembers, 'Informatique')).toBeFalsy();
  });
  test('called with an member skill name present in arrayMembers, should return an array of Members', () => {
    expect(findMembersBySkills(arrayMembers, 'Jardinage')).toStrictEqual([
      member1,
      member3,
    ]);
  });
  test('called with an invalid type slug, should return false', () => {
    return expect(findMembersBySkills(arrayMembers, undefined)).toBeFalsy();
  });
});

describe('Test function arrayIdsSkills(): Transform skills in array of id skills', () => {
  test('called with an array of skills object, should return an id array of skills', () => {
    expect(arrayIdsSkills(skillsFromState)).toStrictEqual([1, 2, 3, 4]);
  });
  test('called with an empty array, should return an empty array', () => {
    expect(arrayIdsSkills([])).toStrictEqual([]);
  });
});

describe('Test function isHeAdmin(), receive an array of roles: Return true if member is admin, false if he s not', () => {
  test('called with a member admin, should return true', () => {
    expect(isHeAdmin(member1.roles)).toBeTruthy();
  });
  test('called with a member not admin, should return false', () => {
    expect(isHeAdmin(member2.roles)).toBeFalsy();
  });
});

describe('Test function findMembersBySearchBar: Find array of members by search bar', () => {
  test('called with no present zip code or member skill name, should return false', () => {
    expect(findMembersBySearchBar(arrayMembers, '', '40000')).toBeFalsy();
    expect(findMembersBySearchBar(arrayMembers, 'Plomberie', '')).toBeFalsy();
    expect(
      findMembersBySearchBar(arrayMembers, 'Peinture', '75000')
    ).toBeFalsy();
  });
  test('called with an invalid type slug, should return false', () => {
    expect(findMembersBySearchBar(arrayMembers, undefined, '')).toBeFalsy();
    expect(findMembersBySearchBar(arrayMembers, '', undefined)).toBeFalsy();
    expect(
      findMembersBySearchBar(arrayMembers, undefined, undefined)
    ).toBeFalsy();
  });
  test('called with a present zip code in arrayMembers, should return an array of members with the same zip code', () => {
    expect(findMembersBySearchBar(arrayMembers, '', '34000')).toStrictEqual([
      member1,
      member3,
    ]);
    expect(findMembersBySearchBar(arrayMembers, '', '34500')).toStrictEqual([
      member2,
    ]);
  });
  test('called with a present user skill name in arrayMembers, should return an array of members with the same member skill name', () => {
    expect(findMembersBySearchBar(arrayMembers, 'Courses', '')).toStrictEqual([
      member2,
    ]);
    expect(findMembersBySearchBar(arrayMembers, 'Jardinage', '')).toStrictEqual(
      [member1, member3]
    );
  });
  test('called with a present member skill name and a present zip code in arrayMembers, should return the array of wanted members', () => {
    expect(
      findMembersBySearchBar(arrayMembers, 'Electricité', '34500')
    ).toStrictEqual([member2]);
    expect(
      findMembersBySearchBar(arrayMembers, 'Jardinage', '34000')
    ).toStrictEqual([member1, member3]);
  });
});
