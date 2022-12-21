import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputValueContact,
  actionSubmitContactForm,
} from '../../actions/contact';
import { GlobalState } from '../../reducers';
import Field from '../Field';
import './styles.scss';

function ContactForm() {
  const dispatch = useDispatch();
  const changeField = (value: string | File, nameInput: string): void => {
    dispatch(actionChangeInputValueContact(value, nameInput));
  };

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

  const handleSubmitContactForm = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    dispatch(actionSubmitContactForm());
    console.log('envoyer');
  };

  let classNameInfo = 'inscription__info';
  if (messageSystem !== '' && contactFormCompleted) {
    classNameInfo = 'inscription__info success';
  } else if (messageSystem !== '' && !contactFormCompleted) {
    classNameInfo = 'inscription__info danger';
  }

  return (
    <section className="contact">
      <script src="https://smtpjs.com/v3/smtp.js"></script>
      <p className="contact__title">Contactez-nous</p>
      <p className={classNameInfo}>
        {!messageSystem
          ? "Les champs marqués d'une * sont obligatoire"
          : messageSystem}
      </p>
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
          placeholder="Ex: Problème d'uploade d'image "
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
    </section>
  );
}

export default ContactForm;
