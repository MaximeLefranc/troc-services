import Field from '../../Field';
import './styles.scss';

function FormMessage(): JSX.Element {
  const handleChangeField = (newValue, nameInut) => {
    console.log('nom de linput ' + nameInut, 'valeur ' + newValue);
  };
  return (
    <section className="send-message">
      <h2 className="send-message__title">Envoyer un message à</h2>
      <img
        className="send-message__img"
        src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
        alt="profile-photo"
      />
      <form className="send-message__form">
        <Field
          label="Sujet"
          className="send--message__form__input"
          required={true}
          id="subject"
          type="text"
          name="subject"
          placeholder="Sujet du message"
          onChange={handleChangeField}
        />
        <Field
          label="Message"
          className="send--message__form__input-text-area"
          required={true}
          id="message"
          isTextArea={true}
          name="message"
          placeholder="Votre message ici"
          onChange={handleChangeField}
        />
        {/* <input onChange={handleChangeField} name="receiver" type="hidden">
          id de la personne qui va recevoir le message
        </input> */}
        <button className="send--message__form__button" type="submit">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormMessage;
