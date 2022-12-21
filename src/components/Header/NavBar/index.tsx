import { Category } from '../../SkillsSelect';
import NavDropdown from './NavDropdown';
import './styles.scss';

interface NavBarProps {
  listOfSkills: Category[];
  mobileScreen: boolean;
}

function NavBar({ listOfSkills, mobileScreen }: NavBarProps): JSX.Element {
  return (
    <section className="topNav">
      <ul className="topNave__NaveDropdown">
        {listOfSkills.map((category: Category) => (
          <NavDropdown
            category={category}
            key={category.id}
            mobileScreen={mobileScreen}
          />
        ))}
      </ul>
    </section>
  );
}

export default NavBar;
