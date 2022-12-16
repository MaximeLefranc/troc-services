function isStrongPassword(password: string): boolean {
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
