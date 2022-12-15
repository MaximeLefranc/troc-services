import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import { findMember } from '../../selectors/members';
import { getUrlApi } from '../../utils/utils';
import Spinner from '../Spinner';
import './styles.scss';

function ProfileDetail(): JSX.Element {
  const url = getUrlApi();
  const { slug } = useParams();
  const listOfMembers = useSelector(
    (state: GlobalState) => state.user.listOfMembers
  );
  const member = findMember(listOfMembers, slug);
  if (listOfMembers.length === 0) {
    return <Spinner />;
  } else if (member === false) {
    return <Navigate to="/notFound" replace />; //! URL a modifier
  }
  const hasAdverts = member.advertisements ? true : false;
  return (
    <section className="main">
      <section className="profile-detail">
        <img
          className="profile-detail__picture"
          src={`${url}/img/${member.imageName}`}
          alt="profile picture of member"
        />
        <h2 className="profile-detail__pseudo">{member.nickname}</h2>
        <Link to={`/profils/${member.nickname}/envoyer-message`}>
          <button className="profile-detail__contact" type="button">
            {/* ou modifier ! */}
            Me contacter
          </button>
        </Link>
        <p className="profile-detail__description">{member.biography}</p>
        <h3 className="profile-detail__title">Ce que je sais faire</h3>
        <div className="profile-detail__skills">
          {member.skill.map((skill) => (
            <p key={skill.id} className="profile-detail__skills__skill">
              {skill.name}
            </p>
          ))}
        </div>
        {hasAdverts && <h3 className="profile-detail__title">Mes annonces</h3>}
        {hasAdverts &&
          member.advertisements.map((advertisement) => (
            <Link key={advertisement.id} to={`/annonces/${advertisement.id}`}>
              <div key={advertisement.id} className="profile-detail__adverts">
                <img
                  className="profile-detail__adverts__picture"
                  src={advertisement.imageName}
                ></img>
                <h4 className="profile-detail__adverts__title">
                  {advertisement.title}
                </h4>
                <p className="profile-detail__adverts__description">
                  {advertisement.content}
                </p>
              </div>
            </Link>
          ))}
      </section>
    </section>
  );
}

export default ProfileDetail;
