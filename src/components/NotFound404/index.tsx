import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image404 from './../../assets/gif/page-not-found.gif';
import './styles.scss';
import { variantsNotFound } from '../../utils/framerMotionVariants';

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
