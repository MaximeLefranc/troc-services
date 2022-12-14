import { Link } from 'react-router-dom';
import { Category } from './../index';
import { Skills } from '../../NavBar/NavDropdown';
import './styles.scss';

function MobileDropdown({ category }: { category: Category }): JSX.Element {
  return (
    <li className="navMobile__dropdown">
      <span className="navMobile__dropbtn">{category.name}</span>
      <div className="navMobile__dropdown--content ">
        {category.skills.map((skills: Skills) => (
          <Link
            className="navMobile__dropdown--link"
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

export default MobileDropdown;
