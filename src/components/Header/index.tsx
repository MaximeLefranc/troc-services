import './styles.scss';
import logo from '../../assets/logo/troc-services.png';
import MobileNav from './MobileNav';
import FormFilters from '../FormFilters';
import NavBar from './NavBar';

function Header() {
  const screen = window.matchMedia('(max-width: 600px)');
  const mobileScreen = screen.matches;
  console.log(mobileScreen);

  /* mettre le logo en 1er et en dessous le button deposer l'annonce puis la nav*/

  return (
    <header>
      {mobileScreen ? <MobileNav logo={logo} /> : <NavBar logo={logo} />}
      <span className="mq-value"></span>
      <FormFilters />
      <button className="header--button" type="button">
        Déposez votre annonce
      </button>
    </header>
  );
}

export default Header;
