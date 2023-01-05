import { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  actionChangeInputValueContact,
  actionSubmitContactForm,
} from '../../actions/contact';
import { actionFetchAllMessagesForOneUser } from '../../actions/messages';
import { GlobalState } from '../../reducers';
import Field from '../Field';
import Spinner from '../Spinner';
import './styles.scss';
import { variantsDetail } from '../../utils/framerMotionVariants';

function ContactForm() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const lastName = useSelector((state: GlobalState) => state.contact.lastname);
  const firstName = useSelector(
    (state: GlobalState) => state.contact.firstname
  );
  const email = useSelector((state: GlobalState) => state.contact.email);
  const subject = useSelector((state: GlobalState) => state.contact.subject);
  const message = useSelector((state: GlobalState) => state.contact.message);
  const messageSystem = useSelector(
    (state: GlobalState) => state.contact.messageSystem
  );
  const contactFormCompleted = useSelector(
    (state: GlobalState) => state.contact.contactFormCompleted
  );

  const changeField = (value: string | File, nameInput: string): void => {
    dispatch(actionChangeInputValueContact(value, nameInput));
  };
  const handleSubmitContactForm = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    dispatch(actionSubmitContactForm());
  };

  useEffect(() => {
    if (localStorage.getItem('token_troc_services')) {
      dispatch(actionFetchAllMessagesForOneUser());
    }
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  let classNameInfo = '';
  if (messageSystem !== '' && contactFormCompleted) {
    classNameInfo = 'contact__info success';
  } else if (messageSystem !== '' && !contactFormCompleted) {
    classNameInfo = 'contact__info danger';
  }

  return (
    <motion.section
      className="contact"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsDetail}
    >
      <p className="contact__title">Contactez-nous</p>
      <p className="contact__info">
        Les champs marqués d'une * sont obligatoire
      </p>
      <p className={classNameInfo}>{!messageSystem ? '' : messageSystem}</p>
      <form className="contact__form" onSubmit={handleSubmitContactForm}>
        <Field
          label="Prénom"
          valueInState={firstName}
          required={true}
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Prénom"
          className="contact__form__input"
          onChange={changeField}
        />
        <Field
          label="Nom"
          valueInState={lastName}
          required={true}
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Nom"
          className="contact__form__input"
          onChange={changeField}
        />
        <Field
          label="Email"
          valueInState={email}
          required={true}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="contact__form__input"
          onChange={changeField}
        />
        <Field
          label="Sujet"
          valueInState={subject}
          type="text"
          required={true}
          id="subject"
          name="subject"
          placeholder="Ex: Problème d'upload d'image"
          className="contact__form__input"
          onChange={changeField}
        />
        <Field
          label="Message"
          valueInState={message}
          required={true}
          id="message"
          name="message"
          placeholder="Votre message ici"
          className="contact__form__input message"
          onChange={changeField}
          isTextArea={true}
        />
        <button className="contact__form__button" type="submit">
          Envoyer
        </button>
      </form>
    </motion.section>
  );
}

export default ContactForm;
