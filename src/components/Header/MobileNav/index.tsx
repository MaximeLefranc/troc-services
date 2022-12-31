import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionToggleLogInForm } from '../../../actions/user';
import { Category } from '../../SkillsSelect';
import NavDropdown from '../NavBar/NavDropdown';
import './styles.scss';

function MobileNav({
  logo,
  isLogged,
  listOfSkills,
}: {
  logo: string;
  isLogged: boolean;
  listOfSkills: Category[];
}): JSX.Element {
  const dispatch = useDispatch();
  const handleToggleLogInForm = (): void => {
    dispatch(actionToggleLogInForm());
  };

  return (
    <div className="top-nav">
      <Link className="mobileNav__logo--link" to="/accueil">
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
        {isLogged ? (
          ''
        ) : (
          <Link
            className="mobileNav__links--link"
            onClick={handleToggleLogInForm}
            to="#"
          >
            Connexion
          </Link>
        )}

        {isLogged ? (
          ''
        ) : (
          <Link className="mobileNav__links--link" to="/inscription">
            Inscription
          </Link>
        )}

        <Link className="mobileNav__links--link" to="/profils">
          Profils
        </Link>
        {listOfSkills.map((category: Category) => (
          <NavDropdown category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
