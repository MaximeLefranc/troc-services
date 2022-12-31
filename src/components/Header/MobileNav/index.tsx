import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  actionToggleBurgerMenu,
  actionToggleLogInForm,
} from '../../../actions/user';
import { GlobalState } from '../../../reducers';
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
  const toggleMenuBurger = useSelector(
    (state: GlobalState) => state.user.burgerMenuIsOpen
  );
  const handleToggleLogInForm = (): void => {
    dispatch(actionToggleBurgerMenu());
    dispatch(actionToggleLogInForm());
  };
  const handleToggleBurgerMenu = (): void => {
    dispatch(actionToggleBurgerMenu());
  };

  return (
    <div className="top-nav">
      <Link className="mobileNav__logo--link" to="/accueil">
        <img src={logo} className="mobileNav__logo" alt="logo troc'services" />
      </Link>
      <input
        id="mobileNav__links-toggle"
        type="checkbox"
        checked={toggleMenuBurger}
        onChange={handleToggleBurgerMenu}
      />
      <label
        className="mobileNav__links-button-container"
        htmlFor="mobileNav__links-toggle"
      >
        <div className="mobileNav__links-button"></div>
      </label>
      <div className="mobileNav__links">
        {!isLogged && (
          <>
            <Link
              className="mobileNav__links--link"
              onClick={handleToggleLogInForm}
              to="#"
            >
              Connexion
            </Link>
            <Link
              className="mobileNav__links--link"
              to="/inscription"
              onClick={handleToggleBurgerMenu}
            >
              Inscription
            </Link>
          </>
        )}

        <Link
          className="mobileNav__links--link"
          to="/profils"
          onClick={handleToggleBurgerMenu}
        >
          Profils
        </Link>
        {listOfSkills.map((category: Category) => (
          <NavDropdown
            category={category}
            key={category.id}
            onClick={handleToggleBurgerMenu}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
