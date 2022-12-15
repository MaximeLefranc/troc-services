import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogOut, actionToggleLogInForm } from '../../actions/user';
import backgroundVideo from './../../assets/video/trocservices.mp4';
import logo from './../../assets/logo/troc-services-sansBG.svg';
import FormFilters from '../FormFilters';
import Presentation from './Presentation';
import './styles.scss';
import { GlobalState } from '../../reducers';

function Welcome() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: GlobalState) => state.user.isLoggedIn);
  const handleToggleLogInForm = (): void => {
    if (!isLoggedIn) {
      dispatch(actionToggleLogInForm());
    } else {
      dispatch(actionLogOut());
    }
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
        {!isLoggedIn && (
          <Link className="welcome__links--link" to="/inscription">
            Inscription
          </Link>
        )}
        <Link
          className="welcome__links--link"
          onClick={handleToggleLogInForm}
          to="#"
        >
          {isLoggedIn ? 'Déconnexion' : 'Connexion'}
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
