export function isStrongPassword(password: string): boolean {
  const regex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
  );
  return regex.test(password);
}

export function checkPassword(
  password: string,
  passwordConfirmation: string
): boolean | string {
  if (password !== passwordConfirmation) {
    return 'Les deux mot de passe ne correspondent pas.';
  }
  if (!isStrongPassword(password)) {
    return 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial';
  }
  return true;
}

/**
 * Get url API dev or Prod
 * @returns string of URL API
 */
export function getUrlApi(): string {
  let urlAPI = '';
  if (process.env.NODE_ENV === 'development') {
    if (process.env.REACT_APP_API_URL_DEV) {
      urlAPI = process.env.REACT_APP_API_URL_DEV;
    }
  } else if (process.env.NODE_ENV === 'production') {
    if (process.env.REACT_APP_API_URL_PROD) {
      urlAPI = process.env.REACT_APP_API_URL_PROD; //! mettre la bonne url de PORD dans le fichier .env
    }
  }
  return urlAPI;
}

/**
 * Give string and get clean string
 * @param a string for cleanning text
 * @returns clean string without any special character
 */
export function strNoAccent(a: string) {
  const b = 'áàâäãåçéèêëēíïîìīñóòôöōúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ';
  const c = 'aaaaaaceeeeeiiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY';
  let d = '';
  for (let i = 0, j = a.length; i < j; i++) {
    const e = a.substr(i, 1);
    d += b.indexOf(e) !== -1 ? c.substr(b.indexOf(e), 1) : e;
  }
  return d;
}
