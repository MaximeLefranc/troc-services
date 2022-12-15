import Field from '../../Field';
import './styles.scss';

function FormMessage(): JSX.Element {
  const handleChangeField = (
    newValue: string | File,
    nameInput: string
  ): void => {
    console.log('nom de linput ' + nameInput, 'valeur ' + newValue);
  };
  return (
    <section className="send-message">
      <h2 className="send-message__title">Envoyer un message à</h2>
      <img
        className="send-message__img"
        src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
        alt="profile-photo"
      />
      <p className="send-message__pseudo">Pseudo</p>
      <form className="send-message__form">
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
        />
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
        />
        <Field
          label=""
          classNameLabel="send-message__form__label__hidden"
          type="hidden"
          className="send-message__form__label__hidden__input"
          required={true}
          id="recipientid"
          name="recipientid"
          placeholder=""
          onChange={handleChangeField}
        />
        <button className="send-message__form__button" type="submit">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormMessage;
