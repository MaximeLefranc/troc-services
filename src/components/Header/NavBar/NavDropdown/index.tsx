import { Link, useLocation } from 'react-router-dom';
import { Category } from './../index';
import './styles.scss';

export interface Skills {
  id: number;
  name: string;
}

function NavDropdown({
  category,
  mobileScreen,
}: {
  mobileScreen: boolean;
  category: Category;
}): JSX.Element {
  const { pathname } = useLocation();
  const link =
    pathname.split('/')[1] === 'profils'
      ? 'profils/competence/'
      : 'annonces/categorie/';
  const navMobile = mobileScreen ? 'Mobile' : '';

  return (
    <li className={`nav${navMobile}__dropdown`}>
      <span className={`nav${navMobile}__dropbtn`}>{category.name}</span>
      <div className={`nav${navMobile}__dropdown--content`}>
        {category.skills.map((skills: Skills) => (
          <Link
            className={`nav${navMobile}__dropdown--link`}
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
