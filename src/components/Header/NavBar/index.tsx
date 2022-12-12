import NavDropdown from './NavDropdown';
import './styles.scss';

function NavBar() {
  return (
    <section className="topNav">
      <ul className="topNave__NaveDropdown">
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
