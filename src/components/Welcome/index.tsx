import { Link } from 'react-router-dom';
import backgroundVideo from './../../assets/video/trocservices.mp4';
import logo from './../../assets/logo/troc-services-sansBG.svg';
import FormFilters from '../FormFilters';
import Presentation from './Presentation';
import './styles.scss';

function Welcome() {
  return (
    <section className="welcome">
      <img src={logo} className="welcome__logo" alt="logo troc'services" />
      <video autoPlay loop muted className="welcome__video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Presentation />
      <FormFilters />
      <Link className="welcome__link" to="#">
        Inscription
      </Link>
      <Link className="welcome__link" to="#">
        Connexion
      </Link>
      <Link className="welcome__link" to="#">
        Annonces
      </Link>
      <Link className="welcome__link" to="#">
        Profils
      </Link>
    </section>
  );
}

export default Welcome;
