import FieldInscription from './FieldInscription';
import './styles.scss';

function InscriptionForm(): JSX.Element {
  const changeField = (value: string, nameInput: string): void => {
    console.log(value, nameInput);
  };
  return (
    <section className="inscription">
      <form className="inscription__form">
        <FieldInscription
          label="Pseudo"
          type="text"
          required={true}
          id="nickname"
          name="nickname"
          placeholder="Pseudo"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Nom"
          required={true}
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Nom"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Prénom"
          required={true}
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Prénom"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Date de naissance"
          required={true}
          id="birthday"
          type="date"
          name="birthday"
          placeholder="JJ/MM/AAAA"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Choisir une photo"
          classNameLabel="inscription__form__label label-photo"
          required={false}
          id="picture"
          type="file"
          name="picture"
          placeholder="Choisir une photo"
          className="inscription__form__input--photo"
          accept="image/jpeg"
          onChange={changeField}
        />
        <FieldInscription
          label="Email"
          required={true}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Adresse"
          required={false}
          id="adress"
          type="text"
          name="email"
          placeholder="Adresse"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Ville"
          required={true}
          id="town"
          type="text"
          name="town"
          placeholder="Ville"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Code postal"
          required={true}
          id="zip"
          type="text"
          name="zip"
          placeholder="Code postal"
          className="inscription__form__input"
          pattern="[0-9]*"
          onChange={changeField}
        />
        <FieldInscription
          label="Mot de passe"
          required={true}
          id="password"
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="inscription__form__input"
          onChange={changeField}
        />
        <FieldInscription
          label="Confirmation du mot de passe"
          required={true}
          id="password"
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="inscription__form__input"
          onChange={changeField}
        />
        <button className="inscription__form__button" type="button">
          Inscription
        </button>
      </form>
    </section>
  );
}

export default InscriptionForm;
