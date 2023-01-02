import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionFetchAllMessagesForOneUser } from '../../../actions/messages';
import { GlobalState } from '../../../reducers';
import NotFound404 from '../../NotFound404';
import Spinner from '../../Spinner';
import Card from '../Card';

export interface User {
  biography: string;
  id: number;
  nickname: string;
  imageName: string;
  city: string;
  zip_code: string;
  advertisements: {
    id: number;
    title: string;
    content: string;
    imageName: string;
    approved: boolean;
  }[];
  skill: { id: number; name: string }[];
}

function ProfilesCards(): JSX.Element {
  const dispatch = useDispatch();
  const usersFromSate = useSelector(
    (state: GlobalState) => state.user.listOfMembers
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  useEffect(() => {
    if (localStorage.getItem('token_troc_services')) {
      dispatch(actionFetchAllMessagesForOneUser());
    }
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  if (usersFromSate.length === 0) {
    return <NotFound404 />;
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
              city={user.city}
              zipCode={user.zip_code}
            />
          </Link>
        ))}
      </section>
    </section>
  );
}

export default ProfilesCards;
