import { Link } from 'react-router-dom';
import backgroundVideo from './../../assets/video/trocservices.mp4';
import logo from './../../assets/logo/troc-services-sansBG.svg';
import FormFilters from '../FormFilters';
import Presentation from './Presentation';
import './styles.scss';

function Welcome() {
  return (
    <section className="welcome">
      <video autoPlay loop muted className="welcome__video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <img src={logo} className="welcome__logo" alt="logo troc'services" />
      <Presentation />
      <FormFilters />
      <div className="welcome__links">
        <Link className="welcome__links--link" to="#">
          Inscription
        </Link>
        <Link className="welcome__links--link" to="#">
          Connexion
        </Link>
        <Link className="welcome__links--link" to="/accueil">
          Annonces
        </Link>
        <Link className="welcome__links--link" to="#">
          Profils
        </Link>
      </div>
    </section>
  );
}

export default Welcome;
