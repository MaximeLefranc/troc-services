import { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import {
  actionChangeInputValueMessage,
  actionSendMessage,
  actionSetTitleAdvertInSubjectState,
} from '../../../actions/messages';
import { GlobalState } from '../../../reducers';
import { findAdvert } from '../../../selectors/advertisements';
import { findMemberById } from '../../../selectors/members';
import { getUrlApi } from '../../../utils/utils';
import Field from '../../Field';
import Spinner from '../../Spinner';
import './styles.scss';

function FormMessage(): JSX.Element {
  const urlAPI = getUrlApi();
  const dispatch = useDispatch();
  const { idProfile, idAnnonce } = useParams();

  const member = useSelector((state: GlobalState) =>
    findMemberById(state.user.listOfMembers, idProfile)
  );
  const subject = useSelector((state: GlobalState) => state.messages.subject);
  const message = useSelector((state: GlobalState) => state.messages.message);
  const listOfAdverts = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );
  const messageError = useSelector(
    (state: GlobalState) => state.messages.messageError
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);

  useEffect(() => {
    if (idAnnonce) {
      const advert = findAdvert(listOfAdverts, idAnnonce);
      if (typeof advert !== 'string' && advert !== undefined) {
        dispatch(
          actionSetTitleAdvertInSubjectState(
            `Réponse au sujet de votre annonce: ${advert.title}`
          )
        );
      }
    } else {
      dispatch(actionSetTitleAdvertInSubjectState(''));
    }
  }, [listOfAdverts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (!localStorage.getItem('token_troc_services')) {
    return <Navigate to="/accueil" replace />;
  }
  if (member === false) {
    return <Spinner />;
  }

  const handleChangeField = (
    newValue: string | File,
    nameInput: string
  ): void => {
    dispatch(actionChangeInputValueMessage(newValue, nameInput));
  };

  const handleSendMessage = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    dispatch(actionSendMessage(member.id));
  };

  return (
    <section className="send-message">
      <h2 className="send-message__title">{`Envoyer un message à ${member.nickname}`}</h2>
      <img
        className="send-message__img"
        src={`${urlAPI}img/${member.imageName}`}
        alt="profile-photo"
      />
      <p className="send-message__pseudo">{member.nickname}</p>
      {messageError !== '' && (
        <h2 className="send-message__title--message">{messageError}</h2>
      )}
      <form className="send-message__form" onSubmit={handleSendMessage}>
        {!idAnnonce ? (
          <Field
            label="Objet"
            classNameLabel="send-message__form__label"
            className="send-message__form__label__input"
            required={true}
            id="subject"
            type="text"
            name="subject"
            placeholder="Sujet du message"
            onChange={handleChangeField}
            valueInState={subject}
          />
        ) : (
          <Field
            label="Objet"
            classNameLabel="send-message__form__label"
            className="send-message__form__label__input"
            required={true}
            id="subject"
            type="text"
            name="subject"
            placeholder="Sujet du message"
            onChange={handleChangeField}
            valueInState={subject}
            disabled={true}
          />
        )}
        <Field
          label="Message"
          classNameLabel="send-message__form__label"
          className="send-message__form__label__input-text-area"
          required={true}
          id="message"
          isTextArea={true}
          name="message"
          placeholder="Votre message ici"
          onChange={handleChangeField}
          valueInState={message}
        />
        <button className="send-message__form__button" type="submit">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormMessage;
