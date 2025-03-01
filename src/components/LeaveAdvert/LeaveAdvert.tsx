// ---- React Import ----
import { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

// ---- Framer-motion Import ----
import { motion } from 'framer-motion';
import { variantsDetail } from '../../utils/framerMotionVariants';

// ---- Actions Import ----
import {
  actionAddMessage,
  actionChangeInputValueNewAdvert,
  actionEditInDbThisAdvert,
  actionFetchAdvertForModification,
  actionSubmitNewAdvert,
} from '../../actions/advertisements';

// ---- TypeScript Import ----
import { GlobalState } from '../../reducers';

// ---- Selector Import ----
import { findAdvert } from '../../selectors/advertisements';

// ---- Components Import ----
import Field from '../InscriptionForm/Field';
import SkillsSelect from '../SkillsSelect';
import Spinner from '../Spinner';

// ---- Styles Import ----
import './styles.scss';

function LeaveAdvert(): JSX.Element {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const advertToModify = useSelector((state: GlobalState) =>
    findAdvert(state.advertisements.listOfAdverts, slug)
  );
  const isSubmitSuccess = useSelector(
    (state: GlobalState) => state.advertisements.submitSuccess
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const message = useSelector(
    (state: GlobalState) => state.advertisements.message
  );
  const titleInput = useSelector(
    (state: GlobalState) => state.advertisements.titleInput
  );
  const descriptionInput = useSelector(
    (state: GlobalState) => state.advertisements.descriptionInput
  );
  const skills = useSelector(
    (state: GlobalState) => state.advertisements.skills
  );
  const handleChangeField = (newValue: string | File, nameInput: string) => {
    dispatch(actionChangeInputValueNewAdvert(newValue, nameInput));
  };

  let classNameInfo = 'leaveadvert__info';
  if (message && isSubmitSuccess) {
    classNameInfo = 'leaveadvert__info success';
  } else if (message && !isSubmitSuccess) {
    classNameInfo = 'leaveadvert__info danger';
  }

  const isMineAdvert =
    advertToModify &&
    typeof advertToModify !== 'string' &&
    advertToModify.user.nickname ===
      localStorage.getItem('pseudo_troc_services');

  const handleSubmitNewAdvert = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    if (skills.length === 0) {
      dispatch(
        actionAddMessage('Veuillez sélectionner au moins une compétence')
      );
    } else {
      if (isMineAdvert) {
        dispatch(actionEditInDbThisAdvert(advertToModify.id));
      } else {
        dispatch(actionSubmitNewAdvert());
      }
    }
  };

  useEffect(() => {
    if (isMineAdvert) {
      dispatch(actionFetchAdvertForModification(advertToModify.id));
    }
  }, [slug]);

  if (!localStorage.getItem('token_troc_services')) {
    return <Navigate to="/inscription" replace />;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <motion.section
      className="leaveadvert"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsDetail}
    >
      <p className={classNameInfo}>
        {!message ? "Les champs marqués d'une * sont obligatoire" : message}
      </p>
      <form className="leaveadvert__form" onSubmit={handleSubmitNewAdvert}>
        <Field
          label="Titre de l'annonce"
          placeholder="Titre"
          required={true}
          id="title"
          type="text"
          name="titleInput"
          className="inscription__form__input"
          onChange={handleChangeField}
          valueInState={titleInput}
        />
        <Field
          label="Choisir une photo"
          classNameLabel="inscription__form__label label-photo"
          required={false}
          id="picture"
          type="file"
          name="picture"
          placeholder="Choisir une photo"
          className="inscription__form__input--photo"
          accept="image/jpeg, image/jpg, image/png"
          onChange={handleChangeField}
        />
        <Field
          label="Description"
          required={true}
          id="description"
          name="descriptionInput"
          placeholder="Desctiption de l'annonce ici"
          className="inscription__form__input description"
          onChange={handleChangeField}
          isTextArea={true}
          valueInState={descriptionInput}
        />
        <SkillsSelect />
        <label className="leaveadvert__form__label">
          <input
            className="leaveadvert__form__input__checkbox"
            type="checkbox"
            required
          />
          Je certifie que l'annonce ne contient pas de contenu explicite
        </label>
        <p className="leaveadvert__form__caution">
          Après validation de l'équipe de modération, l'annonce sera en ligne
        </p>
        <button className="leaveadvert__form__button" type="submit">
          {isMineAdvert ? 'Je modifie mon annonce' : 'Je valide mon annonce'}
        </button>
      </form>
    </motion.section>
  );
}

export default LeaveAdvert;
