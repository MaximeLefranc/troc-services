import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import { findMember } from '../../selectors/members';
import './styles.scss';

function ProfileDetail(): JSX.Element {
  const { slug } = useParams();
  const listOfMembers = useSelector((state: GlobalState) =>
    findMember(state.user.listOfMembers, slug)
  );
  if (listOfMembers === false) {
    console.log("page 404 si pas d'annonce");
    return <div>Page 404</div>;
    //! return "Navigate" to 404
  }
  const hasAdverts = listOfMembers.advertisements ? true : false;
  return (
    <section className="main">
      <section className="profile-detail">
        <img
          className="profile-detail__picture"
          src={listOfMembers.imageName}
          alt="profile picture of member"
        />
        <h2 className="profile-detail__pseudo">{listOfMembers.nickname}</h2>
        <Link to={`/profils/${listOfMembers.nickname}/envoyer-message`}>
          <button className="profile-detail__contact" type="button">
            {/* ou modifier ! */}
            Me contacter
          </button>
        </Link>
        <p className="profile-detail__description">{listOfMembers.biography}</p>
        <h3 className="profile-detail__title">Ce que je sais faire</h3>
        <div className="profile-detail__skills">
          {listOfMembers.skill.map((skill) => (
            <p key={skill.id} className="profile-detail__skills__skill">
              {skill.name}
            </p>
          ))}
        </div>
        {hasAdverts && <h3 className="profile-detail__title">Mes annonces</h3>}
        {hasAdverts &&
          listOfMembers.advertisements.map((advertisement) => (
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
