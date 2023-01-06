// ---- TypeScript Import ----
import { Category } from '../../../SkillsSelect';

// ---- Component Import ----
import NavDropdown from './NavDropdown';

// ---- Styles Import ----
import './styles.scss';

interface NavBarProps {
  listOfSkills: Category[];
}

function NavBar({ listOfSkills }: NavBarProps): JSX.Element {
  return (
    <section className="topNav">
      <ul className="topNave__NaveDropdown">
        {listOfSkills.map((category: Category) => (
          <NavDropdown category={category} key={category.id} />
        ))}
      </ul>
    </section>
  );
}

export default NavBar;
