import { Link } from 'react-router-dom';
import { Category } from './../index';
import './styles.scss';

export interface Skills {
  id: number;
  name: string;
}

function NavDropdown({ category }: { category: Category }): JSX.Element {
  return (
    <li className="nav__dropdown">
      <span className="nav__dropbtn">{category.name}</span>
      <div className="nav__dropdown--content">
        {category.skills.map((skills: Skills) => (
          <Link
            className="nav__dropdown--link"
            key={skills.id}
            to={`/annonces/categorie/${skills.name}`}
          >
            {skills.name}
          </Link>
        ))}
      </div>
    </li>
  );
}

export default NavDropdown;
