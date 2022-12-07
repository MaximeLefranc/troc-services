import './styles.scss';
import logo from '../../assets/logo/troc-services-sansBG.svg';
import MobileNav from './MobileNav';
import FormFilters from '../FormFilters';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Profiles from './Profiles';

function Header() {
  const screen = window.matchMedia('(max-width: 600px)');
  const mobileScreen = screen.matches;
  console.log(mobileScreen);

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
      <Profiles />
      <Link className="header__link--profils" to="#">
        inscription
      </Link>
      <FormFilters />
      <Link className="header__link--profils" to="#">
        Profils
      </Link>
      <button className="header--button" type="button">
        Déposez votre annonce
      </button>
      {mobileScreen ? <MobileNav logo={logo} /> : <NavBar />}
    </header>
  );
}

export default Header;
