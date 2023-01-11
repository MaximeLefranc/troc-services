// ---- Utils Import ----
import {
  checkPassword,
  getUrlApi,
  isStrongPassword,
  strNoAccent,
} from '../../utils/utils';

describe('Test function isStrongPassword()', () => {
  test('If the password does not contain 8 characters, one uppercase, one lowercase, one number and one special character, should return false', () => {
    expect(isStrongPassword('@trocservices1')).toBeFalsy();
    expect(isStrongPassword('Trocservices1')).toBeFalsy();
    expect(isStrongPassword('@Trocservices')).toBeFalsy();
    expect(isStrongPassword('@Troc1')).toBeFalsy();
  });
  test('If the password contain 8 characters, one uppercase, one lowercase, one number and one special character, should return true', () => {
    expect(isStrongPassword('@Trocservices1')).toBeTruthy();
  });
});

describe('Test function checkPassword()', () => {
  test('When the two passwords are different, should return string', () => {
    expect(checkPassword('@Trocservices1', '@trocservices1')).toBe(
      'Les deux mot de passe ne correspondent pas.'
    );
  });
  test('When the two passwords do not contain the necessary characters, should return string', () => {
    expect(checkPassword('@Trocservices', '@Trocservices')).toBe(
      'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial'
    );
  });
  test('When the two passwords contain the necessary characters and are some equal, should return true', () => {
    expect(checkPassword('@Trocservices1', '@Trocservices1')).toBeTruthy();
  });
});

describe('Test function getUrlApi()', () => {
  test('when is called should return a string of url API', () => {
    expect(typeof getUrlApi()).toBe('string');
  });
});

describe('Test Function strNoAccent()', () => {
  test('Must sterilize string', () => {
    expect(
      strNoAccent('áàâäãåçéèêëēíïîìīñóòôöōúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ')
    ).toBe('aaaaaaceeeeeiiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY');
  });
});
