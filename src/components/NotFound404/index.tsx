// ---- React Import ----
import { Link } from 'react-router-dom';

// ---- Framer-Motion Import ----
import { motion } from 'framer-motion';
import { variantsNotFound } from '../../utils/framerMotionVariants';

// ---- Image Import ----
import image404 from './../../assets/gif/page-not-found.gif';

// ---- Styles Import ----
import './styles.scss';

function NotFound404({ message = '404 Page introuvable' }) {
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
          <img
            className="notFound__container__img"
            src={image404}
            alt="image 404"
          />
        </div>
      </Link>
      <p className="notFound__text">
        Après des recherches interminables, nous n'avons pas trouvé la page
        demandé ...
      </p>
    </motion.section>
  );
}

export default NotFound404;
