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

export function getBase64(file: File) {
  let document;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    document = reader.result;
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };

  return document;
}
