import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { variantsDetail } from '../../utils/framerMotionVariants';
import { actionFetchAllMessagesForOneUser } from '../../actions/messages';
import { actionDeleteProfile } from '../../actions/user';
import { GlobalState } from '../../reducers';
import { findMember } from '../../selectors/members';
import { getUrlApi } from '../../utils/utils';
import NotFound404 from '../NotFound404';
import Spinner from '../Spinner';
import './styles.scss';

function ProfileDetail(): JSX.Element {
  const url = getUrlApi();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const pseudo = useSelector((state: GlobalState) => state.user.pseudo);
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const member = useSelector((state: GlobalState) =>
    findMember(state.user.listOfMembers, slug)
  );
  const handleDeleteProfile = () => {
    if (confirm('Voulez-vous vraiment supprimer votre profil ?')) {
      dispatch(actionDeleteProfile());
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token_troc_services')) {
      dispatch(actionFetchAllMessagesForOneUser());
    }
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (member === false) {
    return <NotFound404 />;
  }
  const isMineProfile = member.nickname === pseudo ? true : false;
  const hasAdverts = member.advertisements.length > 0 ? true : false;
  return (
    <motion.section
      className="profile-detail"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsDetail}
    >
      <img
        className="profile-detail__picture"
        src={`${url}img/${member.imageName}`}
        alt="profile picture of member"
      />
      <h2 className="profile-detail__pseudo">{member.nickname}</h2>
      <p className="profile-detail__city">{member.city}</p>
      <p className="profile-detail__code">{member.zip_code}</p>
      {isMineProfile ? (
        <Link to={`/profils/${member.nickname}/modifier`}>
          <button className="profile-detail__contact" type="button">
            Modifier mon profil
          </button>
        </Link>
      ) : (
        <Link to={`/profils/${member.id}/envoyer-message`}>
          <button className="profile-detail__contact" type="button">
            Me contacter
          </button>
        </Link>
      )}
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
        member.advertisements.map((advertisement) => {
          if (advertisement.approved && !advertisement.isHidden) {
            return (
              <Link key={advertisement.id} to={`/annonces/${advertisement.id}`}>
                <div key={advertisement.id} className="profile-detail__adverts">
                  <img
                    className="profile-detail__adverts__picture"
                    src={`${url}img/${advertisement.imageName}`}
                  />
                  <h4 className="profile-detail__adverts__title">
                    {advertisement.title}
                  </h4>
                  <p className="profile-detail__adverts__description">
                    {advertisement.content}
                  </p>
                </div>
              </Link>
            );
          } else if (!advertisement.approved && !advertisement.isHidden) {
            return (
              <div key={advertisement.id} className="profile-detail__adverts">
                <img
                  className="profile-detail__adverts__picture"
                  src={`${url}img/${advertisement.imageName}`}
                />
                <h4 className="profile-detail__adverts__title">
                  {advertisement.title}
                </h4>
                <p className="profile-detail__adverts__description">
                  {advertisement.content}
                </p>
                <p className="profile-detail__adverts__description--approved">
                  En attente de validation.
                </p>
              </div>
            );
          }
        })}
      {isMineProfile && (
        <button
          className="profile-detail__delete"
          onClick={handleDeleteProfile}
          type="button"
        >
          Supprimer mon profil
        </button>
      )}
    </motion.section>
  );
}

export default ProfileDetail;
