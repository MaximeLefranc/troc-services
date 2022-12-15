import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import './styles.scss';
import { findAdvert } from '../../selectors/advertisements';
import { getUrlApi } from '../../utils/utils';
import Spinner from '../Spinner';
import { Adverts } from '../Cards/AdvertsCards';

function AdvertDetail(): JSX.Element {
  const url = getUrlApi();
  const { slug } = useParams();
  const ListOdAdverts = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );
  const advert: Adverts | string | void = findAdvert(ListOdAdverts, slug);
  if (ListOdAdverts.length === 0) {
    return <Spinner />;
  } else if (typeof advert === 'string' || advert === undefined) {
    return <Navigate to="/Notfound" replace />; //! url à modifier
  }
  return (
    <section className="advert">
      <div className="advert__picture">
        <h2 className="advert__picture__title">{advert.title}</h2>
        <img
          className="advert__picture__image"
          src={`${url}/img/${advert.imageName}`}
          alt="advert picture"
        />
        <Link to={`/profils/${advert.user.nickname}`}>
          <img
            className="advert__picture__profile"
            src={`${url}/img/${advert.user.imageName}`}
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
