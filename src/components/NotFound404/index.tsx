// ---- React Import ----
import { Link } from 'react-router-dom';

// ---- Framer-Motion Import ----
import { motion } from 'framer-motion';
import { variantsNotFound } from '../../utils/framerMotionVariants';

// ---- Image Import ----
import image404 from './../../assets/gif/page-not-found.gif';
import searchNotFound from './../../assets/images/search-hacker.svg';

// ---- Styles Import ----
import './styles.scss';

interface PropsNotFound404 {
  message?: string;
  is404?: boolean;
}

function NotFound404({
  message = '404 Page introuvable',
  is404 = false,
}: PropsNotFound404) {
  return (
    <motion.section
      className="notFound"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsNotFound}
    >
      <h1 className="notFound__title">{message}</h1>
      <Link to="/accueil">
        <div className="notFound__container">
          {is404 ? (
            <img
              className="notFound__container__img"
              src={image404}
              alt="image 404"
            />
          ) : (
            <img
              className="notFound__container__img"
              src={searchNotFound}
              alt="Search not founded"
            />
          )}
        </div>
      </Link>
      {is404 && (
        <p className="notFound__text">
          Après des recherches interminables, nous n'avons pas trouvé la page
          demandé ...
        </p>
      )}
    </motion.section>
  );
}

export default NotFound404;
