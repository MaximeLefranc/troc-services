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
        <label
          htmlFor="touch"
          className="mobileNav__label mobileNav__links--link"
        >
          <span className="mobileNav__span mobileNav__links--link">
            Catégorie
          </span>
        </label>
        <input type="checkbox" id="touch"></input>
        <ul className="mobileNav__links__categorie--links slide">
          <Link className="mobileNav__links--link" to="#">
            sous-categorie
          </Link>
          <Link className="mobileNav__links--link" to="#">
            sous-categorie
          </Link>
          <Link className="mobileNav__links--link" to="#">
            sous-categorie
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default MobileNav;
