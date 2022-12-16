import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../reducers';
import Spinner from '../../Spinner';
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
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  if (isLoading) {
    return <Spinner />;
  } else if (usersFromSate.length === 0) {
    return <div>Page 404</div>; //! Page 404 à faire
  }
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
