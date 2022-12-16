import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import { findMembersBySkills } from '../../selectors/members';
import Card from '../Cards/Card';
import { User } from '../Cards/ProfilesCards';
import Spinner from '../Spinner';

function ProfileFiltered(): JSX.Element {
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const { slug } = useParams();
  const memberList = useSelector(
    (state: GlobalState) => state.user.listOfMembers
  );

  console.log('Skills list : ', memberList);
  const memberListFiltered: User[] | false = findMembersBySkills(
    memberList,
    slug
  );
  console.log('la liste des membre est : ', memberListFiltered);
  if (isLoading) {
    return <Spinner />;
  }
  if (memberListFiltered === false) {
    return <div>Page 404</div>; //! Page 404 à faire
  }
  return (
    <section className="main">
      <h2 className="main__title">
        Voici nos membres qui possèdent la compétence : {slug}
      </h2>
      <section className="cards">
        {memberListFiltered.map((user: User) => (
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

export default ProfileFiltered;
