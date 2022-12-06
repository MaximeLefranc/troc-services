import './styles.scss';
import logo from '../../assets/logo/troc-services.png';
import MobileNav from './MobileNav';
import FormFilters from '../FormFilters';

function Header() {
  return (
    <header>
      {/* <img src={logo} className="header__logo" alt="logo troc'services" /> */}
      <MobileNav logo={logo} />
      <FormFilters />
      <button className="header--button" type="button">
        Déposez votre annonce
      </button>
    </header>
  );
}

export default Header;
