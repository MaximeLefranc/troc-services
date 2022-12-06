import { Link } from 'react-router-dom';
import './styles.scss';

function MobileNav({ logo }: { logo: string }) {
  return (
    <section className="top-nav">
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
          Connexion/inscritpion
        </Link>
        <Link className="mobileNav__links--link" to="#">
          Profils
        </Link>
        <Link className="mobileNav__links--link" to="#">
          Three
        </Link>
        <Link className="mobileNav__links--link" to="#">
          Four
        </Link>
        <Link className="mobileNav__links--link" to="#">
          Five
        </Link>
      </div>
    </section>
  );
}

export default MobileNav;
