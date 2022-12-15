import NavDropdown from './NavDropdown';
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

export interface Advertisements {
  listOfAdverts: [];
  listOfSkills: [];
}

function NavBar({
  advertisements,
  mobileScreen,
}: {
  mobileScreen: boolean;
  advertisements: Advertisements;
}): JSX.Element {
  return (
    <section className="topNav">
      <ul className="topNave__NaveDropdown">
        {advertisements.listOfSkills.map((category: Category) => (
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
