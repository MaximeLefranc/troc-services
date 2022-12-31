import { Link, useLocation } from 'react-router-dom';
import { Category } from '../../../SkillsSelect';
import './styles.scss';

export interface Skills {
  id: number;
  name: string;
}

function NavDropdown({ category }: { category: Category }): JSX.Element {
  const { pathname } = useLocation();
  const link =
    pathname.split('/')[1] === 'profils'
      ? 'profils/competence/'
      : 'annonces/categorie/';
  // const navMobile = mobileScreen ? 'Mobile' : '';

  return (
    <li className={`nav__dropdown`}>
      <span className={`nav__dropbtn`}>{category.name}</span>
      <div className={`nav__dropdown--content`}>
        {category.skills.map((skills: Skills) => (
          <Link
            className={`nav__dropdown--link`}
            key={skills.id}
            to={`${link}${skills.name}`}
          >
            {skills.name}
          </Link>
        ))}
      </div>
    </li>
  );
}

export default NavDropdown;
