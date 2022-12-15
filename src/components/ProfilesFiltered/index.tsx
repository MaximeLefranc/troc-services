import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import { findMembersBySkills } from '../../selectors/members';
import Card from '../Cards/Card';
import { User } from '../Cards/ProfilesCards';

function ProfileFiltered(): JSX.Element {
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
  if (memberListFiltered === false) {
    console.log("page 404 si pas d'annonce");
    return <div>Page 404</div>;
    //! return "Navigate" to 404
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
