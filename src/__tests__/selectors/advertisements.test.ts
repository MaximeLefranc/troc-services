// ---- TypeScript Import ----
import { Adverts } from '../../components/Cards/AdvertsCards';

// ---- Selector Import ----
import {
  findAdvert,
  findAdvertsBySearchBar,
  findAdvertsBySkills,
} from '../../selectors/advertisements';

/* =======================================
   =============== DATA ==================
   ======================================= */

const advertsArray: Adverts[] = [
  {
    id: 1,
    imageName: 'test.jpg',
    title: 'Title test',
    content: 'Content test',
    skills: [
      {
        id: 1,
        name: 'Jardinage',
      },
      {
        id: 2,
        name: 'Mécanique',
      },
    ],
    user: {
      id: 1,
      imageName: 'test.jpg',
      nickname: 'Nicnkname test',
      city: 'City test ',
      zip_code: '34000',
      skill: [
        {
          id: 6,
          name: 'Name user skill test',
        },
        {
          id: 7,
          name: 'Name user skill test',
        },
      ],
    },
  },
  {
    id: 2,
    imageName: 'test.jpg',
    title: 'Title test',
    content: 'Content test',
    skills: [
      {
        id: 3,
        name: 'Courses',
      },
      {
        id: 4,
        name: 'Electricité',
      },
    ],
    user: {
      id: 2,
      imageName: 'test.jpg',
      nickname: 'Nicnkname test',
      city: 'City test ',
      zip_code: '35000',
      skill: [
        {
          id: 3,
          name: 'Name user skill test',
        },
        {
          id: 4,
          name: 'Name user skill test',
        },
      ],
    },
  },
  {
    id: 3,
    imageName: 'test.jpg',
    title: 'Title test',
    content: 'Content test',
    skills: [
      {
        id: 1,
        name: 'Jardinage',
      },
      {
        id: 2,
        name: 'Mécanique',
      },
    ],
    user: {
      id: 1,
      imageName: 'test.jpg',
      nickname: 'Nicnkname test',
      city: 'City test ',
      zip_code: '34000',
      skill: [
        {
          id: 6,
          name: 'Name user skill test',
        },
        {
          id: 7,
          name: 'Name user skill test',
        },
      ],
    },
  },
];

const advertId1: Adverts = {
  id: 1,
  imageName: 'test.jpg',
  title: 'Title test',
  content: 'Content test',
  skills: [
    {
      id: 1,
      name: 'Jardinage',
    },
    {
      id: 2,
      name: 'Mécanique',
    },
  ],
  user: {
    id: 1,
    imageName: 'test.jpg',
    nickname: 'Nicnkname test',
    city: 'City test ',
    zip_code: '34000',
    skill: [
      {
        id: 6,
        name: 'Name user skill test',
      },
      {
        id: 7,
        name: 'Name user skill test',
      },
    ],
  },
};

const advertId2 = {
  id: 2,
  imageName: 'test.jpg',
  title: 'Title test',
  content: 'Content test',
  skills: [
    {
      id: 3,
      name: 'Courses',
    },
    {
      id: 4,
      name: 'Electricité',
    },
  ],
  user: {
    id: 2,
    imageName: 'test.jpg',
    nickname: 'Nicnkname test',
    city: 'City test ',
    zip_code: '35000',
    skill: [
      {
        id: 3,
        name: 'Name user skill test',
      },
      {
        id: 4,
        name: 'Name user skill test',
      },
    ],
  },
};

const advertId3: Adverts = {
  id: 3,
  imageName: 'test.jpg',
  title: 'Title test',
  content: 'Content test',
  skills: [
    {
      id: 1,
      name: 'Jardinage',
    },
    {
      id: 2,
      name: 'Mécanique',
    },
  ],
  user: {
    id: 1,
    imageName: 'test.jpg',
    nickname: 'Nicnkname test',
    city: 'City test ',
    zip_code: '34000',
    skill: [
      {
        id: 6,
        name: 'Name user skill test',
      },
      {
        id: 7,
        name: 'Name user skill test',
      },
    ],
  },
};

/* =======================================
   =============== TESTS ==================
   ======================================= */

describe('Test function findAdvert: Find one advert by this ID', () => {
  test('called with a wrong slug should return string', () => {
    expect(findAdvert(advertsArray, 'unknown id slug')).toBe('not found');
  });
  test('called with a right slug, should return one Advert', () => {
    expect(findAdvert(advertsArray, '1')).toStrictEqual(advertId1);
  });
  test('called with an invalid type slug, should return VOID', () => {
    return expect(findAdvert(advertsArray, undefined)).toBe(void 0);
  });
});

describe('Test function findAdvertsBySkills: Find array of adverts by skill name', () => {
  test('called with a skill name not present in advertsArray, should return false', () => {
    expect(findAdvertsBySkills(advertsArray, 'Informatique')).toBeFalsy();
  });
  test('called with an advert skill name present in advertsArray, should return an array of Adverts', () => {
    expect(findAdvertsBySkills(advertsArray, 'Jardinage')).toStrictEqual([
      advertId1,
      advertId3,
    ]);
  });
  test('called with an invalid type slug, should return false', () => {
    return expect(findAdvertsBySkills(advertsArray, undefined)).toBeFalsy();
  });
});

describe('Test function findAdvertsBySearchBar: Find array of adverts by search bar', () => {
  test('called with no present zip code or advert skill name, should return false', () => {
    expect(findAdvertsBySearchBar(advertsArray, '', '40000')).toBeFalsy();
    expect(findAdvertsBySearchBar(advertsArray, 'Plomberie', '')).toBeFalsy();
    expect(
      findAdvertsBySearchBar(advertsArray, 'Peinture', '75000')
    ).toBeFalsy();
  });
  test('called with an invalid type slug, should return false', () => {
    expect(findAdvertsBySearchBar(advertsArray, undefined, '')).toBeFalsy();
    expect(findAdvertsBySearchBar(advertsArray, '', undefined)).toBeFalsy();
    expect(
      findAdvertsBySearchBar(advertsArray, undefined, undefined)
    ).toBeFalsy();
  });
  test('called with a present zip code in advertsArray, should return an array of adverts with the same zip code', () => {
    expect(findAdvertsBySearchBar(advertsArray, '', '34000')).toStrictEqual([
      advertId1,
      advertId3,
    ]);
    expect(findAdvertsBySearchBar(advertsArray, '', '35000')).toStrictEqual([
      advertId2,
    ]);
  });
  test('called with a present advert skill name in advertsArray, should return an array of adverts with the same advert skill name', () => {
    expect(findAdvertsBySearchBar(advertsArray, 'Courses', '')).toStrictEqual([
      advertId2,
    ]);
    expect(findAdvertsBySearchBar(advertsArray, 'Jardinage', '')).toStrictEqual(
      [advertId1, advertId3]
    );
  });
  test('called with a present advert skill name and a present zip code in advertsArray, should return the array of wanted adverts', () => {
    expect(
      findAdvertsBySearchBar(advertsArray, 'Electricité', '35000')
    ).toStrictEqual([advertId2]);
    expect(
      findAdvertsBySearchBar(advertsArray, 'Jardinage', '34000')
    ).toStrictEqual([advertId1, advertId3]);
  });
});
