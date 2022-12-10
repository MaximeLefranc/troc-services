import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Adverts } from '../Cards/AdvertsCards';
import { GlobalState } from '../../reducers';
import './styles.scss';
import { findAdvert } from '../../selectors/advertisements';

function AdvertDetail(): JSX.Element {
  const { slug } = useParams();
  const listOfAdverts = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );
  const advert: Adverts | false = findAdvert(listOfAdverts, slug);
  if (advert === false) {
    console.log("page 404 si pas d'annonce");
    return <div>Page 404</div>;
    //! return "Navigate" to 404
  }
  return (
    <section className="advert">
      <div className="advert__picture">
        <h2 className="advert__picture__title">{advert.title}</h2>
        <img
          className="advert__picture__image"
          src={advert.imageName}
          alt="advert picture"
        />
        <Link to={`/profils/${advert.user.nickname}`}>
          <img
            className="advert__picture__profile"
            src={advert.user.imageName}
            alt="profile picture"
          />
        </Link>
      </div>
      <Link to={`/annonces/${advert.id}/envoyer-message`}>
        <button className="advert__button" type="button">
          Echangeons nos services !
        </button>
      </Link>
      <p className="advert__description">{advert.content}</p>
      <h3 className="advert__title__skills">Ce que je sais faire</h3>
      <div className="advert__skill">
        {advert.user.skill.map((skill) => (
          <p className="advert__skill__name" key={skill.name}>
            {skill.name}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AdvertDetail;
