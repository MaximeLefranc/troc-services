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
import Spinner from '../Spinner';
import FieldInscription from './FieldInscription';
import './styles.scss';

function InscriptionForm(): JSX.Element {
  const dispatch = useDispatch();

  const skills = useSelector((state: GlobalState) => state.inscription.skills);
  const nickName = useSelector(
    (state: GlobalState) => state.inscription.nickname
  );
  const lastName = useSelector(
    (state: GlobalState) => state.inscription.lastname
  );
  const firstName = useSelector(
    (state: GlobalState) => state.inscription.firstname
  );
  const town = useSelector((state: GlobalState) => state.inscription.town);
  const birthDay = useSelector(
    (state: GlobalState) => state.inscription.birthday
  );
  const adress = useSelector((state: GlobalState) => state.inscription.adress);
  const zip = useSelector((state: GlobalState) => state.inscription.zip);
  const email = useSelector((state: GlobalState) => state.inscription.email);
  const description = useSelector(
    (state: GlobalState) => state.inscription.description
  );
  const password = useSelector(
    (state: GlobalState) => state.inscription.password
  );
  const passwordConfirmation = useSelector(
    (state: GlobalState) => state.inscription.passwordConfirmation
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const inscriptionCompleted = useSelector(
    (state: GlobalState) => state.inscription.inscriptionCompleted
  );
  const message = useSelector(
    (state: GlobalState) => state.inscription.message
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

  let classNameInfo = 'inscription__info';
  if (message !== '' && inscriptionCompleted) {
    classNameInfo = 'inscription__info success';
  } else if (message !== '' && !inscriptionCompleted) {
    classNameInfo = 'inscription__info danger';
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="inscription">
      <p className={classNameInfo}>
        {!message ? "Les champs marqués d'une * sont obligatoire" : message}
      </p>
      <form
        className="inscription__form"
        onSubmit={handleSubmitInscription}
        encType="multipart/form-data"
      >
        <FieldInscription
          label="Pseudo"
          valueInState={nickName}
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
          valueInState={lastName}
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
          valueInState={firstName}
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
          valueInState={birthDay}
          required={true}
          id="birthday"
          type="date"
          name="birthday"
          placeholder="JJ/MM/AAAA"
          className="inscription__form__input"
          onChange={changeField}
        />
        {/* <FieldInscription
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
        /> */}
        <FieldInscription
          label="Email"
          valueInState={email}
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
          valueInState={adress}
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
          valueInState={town}
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
          valueInState={zip}
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
          valueInState={description}
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
          valueInState={password}
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
          valueInState={passwordConfirmation}
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
