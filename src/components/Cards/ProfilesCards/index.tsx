import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../reducers';
import Card from '../Card';

export interface User {
  biography: string;
  id: number;
  nickname: string;
  imageName: string;
  advertisements: {
    id: number;
    title: string;
    content: string;
    imageName: string;
  }[];
  skill: { id: number; name: string }[];
}

function ProfilesCards(): JSX.Element {
  const usersFromSate = useSelector(
    (state: GlobalState) => state.user.listOfMembers
  );
  console.log(usersFromSate);
  return (
    <section className="main">
      <h2 className="main__title">Les derniers membres</h2>
      <section className="cards">
        {usersFromSate.map((user: User) => (
          <Link
            key={user.id}
            className="cards__link"
            to={`/profils/${user.nickname}`}
          >
            <Card
              key={user.id}
              image={user.imageName}
              title={user.nickname}
              description={user.biography}
              skills={user.skill}
            />
          </Link>
        ))}
      </section>
    </section>
  );
}

export default ProfilesCards;
