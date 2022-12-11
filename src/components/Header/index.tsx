import './styles.scss';
import logo from '../../assets/logo/troc-services-logo.svg';
import MobileNav from './MobileNav';
import FormFilters from '../FormFilters';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Profiles from './Profiles';

function Header() {
  const mobileScreen: boolean = window.matchMedia(
    '(max-width: 1200px)'
  ).matches;

  const logged = true;

  /* mettre le logo en 1er et en dessous le button deposer l'annonce puis la nav*/

  return (
    <header className="header">
      {mobileScreen ? (
        ''
      ) : (
        <Link className="Nav__logo--link" to={'/'}>
          <img src={logo} className="Nav__logo" alt="logo troc'services" />
        </Link>
      )}
      {logged ? (
        <Profiles />
      ) : (
        <button className="header__btn--subscribe">
          <Link className="header___btn__link--subscribe" to="#">
            inscription
          </Link>
        </button>
      )}
      <FormFilters />
      <Link className="header__link--profils" to="#">
        Membres
      </Link>
      <button className="header__btn--advert" type="button">
        <Link to="#">Déposez votre annonce</Link>
      </button>
      {mobileScreen ? <MobileNav logo={logo} /> : <NavBar />}
    </header>
  );
}

export default Header;
