import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputValueInscription,
  actionErrorMessageInscription,
  actionSubmitInscriptionForm,
} from '../../actions/inscription';
import { GlobalState } from '../../reducers';
import { checkPassword } from '../../utils/utils';
import SkillsSelect from '../SkillsSelect';
import FieldInscription from './FieldInscription';
import './styles.scss';

function InscriptionForm(): JSX.Element {
  const dispatch = useDispatch();
  const skills = useSelector((state: GlobalState) => state.inscription.skills);
  const password = useSelector(
    (state: GlobalState) => state.inscription.password
  );
  const passwordConfirmation = useSelector(
    (state: GlobalState) => state.inscription.passwordConfirmation
  );
  const changeField = (value: string | File, nameInput: string): void => {
    dispatch(actionChangeInputValueInscription(value, nameInput));
  };
  const handleSubmitInscription = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    const verifPassword = checkPassword(password, passwordConfirmation);
    if (!verifPassword && typeof verifPassword === 'string') {
      dispatch(actionErrorMessageInscription(verifPassword));
    } else if (skills.length === 0) {
      dispatch(
        actionErrorMessageInscription(
          'Veuillez sélectionner au moins une compétence'
        )
      );
    } else {
      dispatch(actionSubmitInscriptionForm());
    }
  };
  return (
    <section className="inscription">
      <p className="inscription__info">
        Les champs marqués d'une * sont obligatoire
      </p>
      <form className="inscription__form" onSubmit={handleSubmitInscription}>
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
          accept="image/jpeg, image/jpg, image/png"
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
          name="adress"
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
          label="Description"
          required={true}
          id="description"
          name="description"
          placeholder="Votre desccription ici"
          className="inscription__form__input description"
          onChange={changeField}
          isTextArea={true}
        />
        <SkillsSelect />
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
          id="confirmPassword"
          type="password"
          name="passwordConfirmation"
          placeholder="Mot de passe"
          className="inscription__form__input"
          onChange={changeField}
        />
        <button className="inscription__form__button" type="submit">
          Inscription
        </button>
      </form>
    </section>
  );
}

export default InscriptionForm;
