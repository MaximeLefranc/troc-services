import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionToggleLogInForm } from '../../actions/user';
import backgroundVideo from './../../assets/video/trocservices.mp4';
import logo from './../../assets/logo/troc-services-sansBG.svg';
import FormFilters from '../FormFilters';
import Presentation from './Presentation';
import './styles.scss';

function Welcome() {
  const dispatch = useDispatch();
  const handleToggleLogInForm = (): void => {
    dispatch(actionToggleLogInForm());
  };
  return (
    <section className="welcome">
      <video autoPlay loop muted className="welcome__video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <img src={logo} className="welcome__logo" alt="logo troc'services" />
      <Presentation />
      <FormFilters />
      <div className="welcome__links">
        <Link className="welcome__links--link" to="/inscription">
          Inscription
        </Link>
        <Link
          className="welcome__links--link"
          onClick={handleToggleLogInForm}
          to="#"
        >
          Connexion
        </Link>
        <Link className="welcome__links--link" to="/accueil">
          Annonces
        </Link>
        <Link className="welcome__links--link" to="/profils">
          Profils
        </Link>
      </div>
    </section>
  );
}

export default Welcome;
