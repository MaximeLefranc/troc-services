import { Link } from 'react-router-dom';
import maxPhoto from '../../assets/images/max-lefranc.svg';
import nicoPhoto from '../../assets/images/nicolas-mahieux.png';
import './styles.scss';

function About(): JSX.Element {
  return (
    <section className="about">
      <div className="about__description">
        <h2 className="about__description__title">Histoire</h2>
        <p className="about__description__history">
          Troc'Services, tout droit sortie de l'esprit de 4 développeurs, est un
          site communautaire d'échanger de services le tout sans avoir besoin
          d'un centime. Vous avez besoin d'un service ? postez simplement votre
          annonce et laissez les autres membres entrer en contact avec vous !
        </p>
      </div>
      <div className="team">
        <div className="team__member">
          <h3 className="team__member__name">Maxime Lefranc</h3>
          <img
            className="team__member__picture"
            src={maxPhoto}
            alt="picture of dev"
          ></img>
        </div>
        <div className="team__member">
          <h3 className="team__member__name">Thomas Lepine</h3>
          <img
            className="team__member__picture"
            src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
            alt="picture of dev"
          ></img>
        </div>
        <div className="team__member">
          <h3 className="team__member__name">Nouha Lamri</h3>
          <img
            className="team__member__picture"
            src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
            alt="picture of dev"
          ></img>
        </div>
        <div className="team__member">
          <h3 className="team__member__name">Nicolas Mahieu</h3>
          <img
            className="team__member__picture"
            src={nicoPhoto}
            alt="picture of dev"
          ></img>
        </div>
      </div>
      <div className="about__links">
        <Link className="about__links__link" to="#">
          Contact
        </Link>
        <Link className="about__links__link" to="#">
          Mentions légales
        </Link>
      </div>
    </section>
  );
}

export default About;
