import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import './styles.scss';

function NavBar({ logo }: { logo: string }) {
  return (
    <section className="topNav">
      <Link className="Nav__logo--link" to={'/'}>
        <img src={logo} className="Nav__logo" alt="logo troc'services" />
      </Link>
      <ul>
        <NavDropdown categoryName="Bricolage" />
        <NavDropdown categoryName="Aide a la personne" />
        <NavDropdown categoryName="Auto/Moto" />
        <NavDropdown categoryName="Jardinage" />
        <NavDropdown categoryName="Informatique" />
        <NavDropdown categoryName="Maison" />
        <NavDropdown categoryName="Cours" />
        <NavDropdown categoryName="Autres categories" />
      </ul>
    </section>
  );
}

export default NavBar;
