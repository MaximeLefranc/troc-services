import { Link } from 'react-router-dom';
import MobileDropdown from './MobileDropdown';
import './styles.scss';

function MobileNav({ logo }: { logo: string }) {
  return (
    <div className="top-nav">
      <Link className="mobileNav__logo--link" to={'/'}>
        <img src={logo} className="mobileNav__logo" alt="logo troc'services" />
      </Link>
      <input id="mobileNav__links-toggle" type="checkbox" />
      <label
        className="mobileNav__links-button-container"
        htmlFor="mobileNav__links-toggle"
      >
        <div className="mobileNav__links-button"></div>
      </label>
      <div className="mobileNav__links">
        <Link className="mobileNav__links--link" to="#">
          Connexion
        </Link>
        <Link className="mobileNav__links--link" to="#">
          Inscritpion
        </Link>
        <Link className="mobileNav__links--link" to="#">
          Profils
        </Link>
        <MobileDropdown />
        <MobileDropdown />
      </div>
    </div>
  );
}

export default MobileNav;
