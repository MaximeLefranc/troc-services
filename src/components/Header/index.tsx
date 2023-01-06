// ---- React Import ----
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// ---- Logo Import ----
import logo from '../../assets/logo/troc-services-logo.svg';

// ---- TypeScript Import ----
import { GlobalState } from '../../reducers';

// ---- Action Import ----
import { actionToggleLogInForm } from '../../actions/user';

// ---- Components Import ----
import MobileNav from './MobileNav';
import FormFilters from '../FormFilters';
import NavBar from './NavBar';
import Profiles from './Profiles';

// ---- Styles Import ----
import './styles.scss';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const listOfSkills = useSelector(
    (state: GlobalState) => state.advertisements.listOfSkills
  );

  const dispatch = useDispatch();
  const handleToggleLogInForm = (): void => {
    dispatch(actionToggleLogInForm());
  };

  const logged = useSelector((state: GlobalState) => state.user.isLoggedIn);

  return (
    <header className="header">
      <Link className="Nav__logo--link" to="/accueil">
        <img src={logo} className="Nav__logo" alt="logo troc'services" />
      </Link>
      {logged ? (
        <Profiles />
      ) : (
        <button
          className="header__btn--subscribe"
          onClick={handleToggleLogInForm}
        >
          <Link className="header___btn__link--subscribe" to="#">
            Connexion
          </Link>
        </button>
      )}
      <FormFilters />
      {pathname.split('/')[1] === 'profils' ? (
        <Link className="header__link--profils" to="/accueil">
          Annonces
        </Link>
      ) : (
        <Link className="header__link--profils" to="/profils">
          Membres
        </Link>
      )}

      <Link
        className="header__links--advert"
        to={logged ? '/nouvelle-annonce' : '/inscription'}
      >
        <button className="header__btn--advert" type="button">
          {logged ? 'Déposez votre annonce' : 'Inscription'}
        </button>
      </Link>
      <MobileNav logo={logo} isLogged={logged} listOfSkills={listOfSkills} />
      <NavBar listOfSkills={listOfSkills} />
    </header>
  );
}

export default Header;
