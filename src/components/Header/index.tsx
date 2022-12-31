import './styles.scss';
import logo from '../../assets/logo/troc-services-logo.svg';
import MobileNav from './MobileNav';
import FormFilters from '../FormFilters';
import NavBar from './NavBar';
import { Link, useLocation } from 'react-router-dom';
import Profiles from './Profiles';
import { GlobalState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { actionToggleLogInForm } from '../../actions/user';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  console.log(pathname.split('/'));
  const listOfSkills = useSelector(
    (state: GlobalState) => state.advertisements.listOfSkills
  );

  const dispatch = useDispatch();
  const handleToggleLogInForm = (): void => {
    dispatch(actionToggleLogInForm());
  };

  const logged = useSelector((state: GlobalState) => state.user.isLoggedIn);

  /* mettre le logo en 1er et en dessous le button deposer l'annonce puis la nav*/

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
