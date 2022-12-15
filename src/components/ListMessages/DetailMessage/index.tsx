import { Link } from 'react-router-dom';
import './styles.scss';

function DetailMessage(): JSX.Element {
  return (
    <section className="message">
      <Link to={`/profils/[pseudo]`}>
        <img
          className="message__img"
          src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
        />
      </Link>
      <p className="message__pseudo">Pseudo de l'auteur</p>
      <h2 className="message__subject">Sujet du message</h2>
      <p className="message__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        bibendum neque, eget ultrices dui bibendum a. Aenean ultricies accumsan
        fringilla. Cras nibh ante, suscipit a bibendum finibus eget ligula.
        Curabitur ultrices, urna a molestie condimentum, ligula dolor varius
        enim, nec ullamcorper tellus quam in sapien. Sed lobortis libero nec
        libero aliquam, vitae interdum ipsum tincidunt. Sed consectetur sed
        velit eget gravida. Integer lacus urna, fermentum quis dictum at,
        commodo mollis dui. Curabitur Curabitur Curabitur pretium elementum
        mauris vel tincidunt. Aliquam vel nisl nec ipsum pharetra viverra non
        Quisque ultricies egestas turpis, id tempor lectus gravida luctus luctus
        nisl, id tempus velit. Sed egestas nulla in ipsum finibus lobortis.
      </p>
      <Link to={`/profils/[pseudo]/envoyer-message`}>
        <button type="button" className="message__button">
          Répondre à pseudo
        </button>
      </Link>
    </section>
  );
}

export default DetailMessage;
