import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionToggleLogInForm } from '../../../actions/user';
import { Advertisements } from '../NavBar';
import MobileDropdown from './MobileDropdown';
import './styles.scss';

export interface Category {
  id: number;
  name: string;
  skills: [
    {
      id: number;
      name: string;
    }
  ];
}

function MobileNav({
  logo,
  isLogged,
  advertisements,
}: {
  logo: string;
  isLogged: boolean;
  advertisements: Advertisements;
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
            Inscritpion
          </Link>
        )}

        <Link className="mobileNav__links--link" to="/profils">
          Profils
        </Link>
        {advertisements.listOfSkills.map((category: Category) => (
          <MobileDropdown category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
