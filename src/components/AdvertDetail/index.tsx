// ---- React Import ----
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// ---- TypeScript Import ----
import { GlobalState } from '../../reducers';

// ---- Selectors Import ----
import { findAdvert } from '../../selectors/advertisements';

// ---- Utils Import ----
import { getUrlApi } from '../../utils/utils';

// ---- Framer-Motion Import ----
import { motion } from 'framer-motion';
import { variantsDetail } from '../../utils/framerMotionVariants';

// ---- Actions Import ----
import { actionDeleteAdvert } from '../../actions/advertisements';

// ---- Components Import ----
import Spinner from '../Spinner';
import NotFound404 from '../NotFound404';

// ---- styles Import ----
import './styles.scss';

function AdvertDetail(): JSX.Element {
  const url = getUrlApi();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const pseudo = useSelector((state: GlobalState) => state.user.pseudo);
  const { slug } = useParams();
  const advert = useSelector((state: GlobalState) =>
    findAdvert(state.advertisements.listOfAdverts, slug)
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof advert === 'string' || advert === undefined) {
    return <NotFound404 />;
  }

  const handleDeleteAdvert = () => {
    if (confirm('Voulez-vous vraiment supprimer votre annonce ?')) {
      dispatch(actionDeleteAdvert(advert.id));
    }
  };
  const isMineAdvert = advert.user.nickname === pseudo ? true : false;
  const city =
    advert.user.city.charAt(0).toUpperCase() + advert.user.city.slice(1);

  return (
    <motion.section
      className="advert"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsDetail}
    >
      <div className="advert__picture">
        <h2 className="advert__picture__title">{advert.title}</h2>
        <img
          className="advert__picture__image"
          src={`${url}img/${advert.imageName}`}
          alt="advert picture"
        />
        <Link to={`/profils/${advert.user.nickname}`}>
          <img
            className="advert__picture__profile"
            src={`${url}img/${advert.user.imageName}`}
            alt="profile picture"
          />
        </Link>
        <p className="advert__picture__city">{city}</p>
        <p className="advert__picture__code">{advert.user.zip_code}</p>
      </div>
      {isMineAdvert ? (
        <Link to={`/annonces/${advert.id}/modifier`}>
          <button className="advert__button" type="button">
            Modifier mon annonce
          </button>
        </Link>
      ) : (
        <Link to={`/annonces/${advert.id}/envoyer-message/${advert.user.id}`}>
          <button className="advert__button" type="button">
            Echangeons nos services !
          </button>
        </Link>
      )}
      <p className="advert__description">{advert.content}</p>
      <h3 className="advert__title__skills">
        Ce que je peux faire en échange !
      </h3>
      <div className="advert__skill">
        {advert.user.skill.map((skill) => (
          <p className="advert__skill__name" key={skill.name}>
            {skill.name}
          </p>
        ))}
      </div>
      {isMineAdvert && (
        <button
          className="advert__delete"
          onClick={handleDeleteAdvert}
          type="button"
        >
          Supprimer mon annonce
        </button>
      )}
    </motion.section>
  );
}

export default AdvertDetail;
