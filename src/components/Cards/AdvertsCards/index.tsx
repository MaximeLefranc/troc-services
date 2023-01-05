import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { actionToggleSubmitSuccess } from '../../../actions/advertisements';
import { actionFetchAllMessagesForOneUser } from '../../../actions/messages';
import { GlobalState } from '../../../reducers';
import NotFound404 from '../../NotFound404';
import Spinner from '../../Spinner';
import Card from '../Card';
import './../styles.scss';
import { variantsCards } from '../../../utils/framerMotionVariants';

export interface Adverts {
  id: number;
  imageName: string;
  title: string;
  content: string;
  skills: [
    {
      id: number;
      name: string;
    }
  ];
  user: {
    id: number;
    imageName: string;
    nickname: string;
    city: string;
    zip_code: string;
    skill: [
      {
        id: number;
        name: string;
      }
    ];
  };
}

function AdvertsCards(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionToggleSubmitSuccess(false, ''));
    if (localStorage.getItem('token_troc_services')) {
      dispatch(actionFetchAllMessagesForOneUser());
    }
    window.scrollTo(0, 0);
  }, []);
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const advertList = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );
  if (isLoading) {
    return <Spinner />;
  }
  if (advertList.length === 0) {
    return <NotFound404 />;
  }
  return (
    <section className="main">
      <h2 className="main__title">Les dernières annonces</h2>
      <motion.section
        className="cards"
        initial="hide"
        animate="show"
        exit="hide"
        variants={variantsCards}
      >
        {advertList.map((advert: Adverts) => (
          <Link
            key={advert.id}
            className="cards__link"
            to={`/annonces/${advert.id}`}
          >
            <Card
              key={advert.id}
              image={advert.imageName}
              title={advert.title}
              description={advert.content}
              skills={advert.skills}
              city={advert.user.city}
              zipCode={advert.user.zip_code}
            />
          </Link>
        ))}
      </motion.section>
    </section>
  );
}

export default AdvertsCards;
