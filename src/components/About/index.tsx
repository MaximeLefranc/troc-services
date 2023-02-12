// ---- React Import ----
import { Link } from 'react-router-dom';

// ---- Framer-Motion Import ----
import { motion } from 'framer-motion';
import { variantsSimple } from '../../utils/framerMotionVariants';

// ---- Component Import ----
import DevImage from './DevImage/DevImage';

// ---- Images Import ----
import maxPhoto from '../../assets/images/max-lefranc.svg';
import nicoPhoto from '../../assets/images/nicolas-mahieux.png';
import nouhaPhoto from '../../assets/images/nouha.jpg';
import thomasPhoto from '../../assets/images/thomas.jpg';

// ---- Styles Import ----
import './styles.scss';

function About(): JSX.Element {
  return (
    <motion.section
      className="about"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsSimple}
    >
      <div className="about__description">
        <h2 className="about__description__title">Histoire</h2>
        <p className="about__description__history">
          Troc'Services, tout droit sortie de l'esprit de 4 développeurs, est un
          site communautaire d'échanges de services le tout sans avoir besoin
          d'un centime. Vous avez besoin d'un service ? postez simplement votre
          annonce et laissez les autres membres entrer en contact avec vous !
        </p>
      </div>
      <div className="team">
        <DevImage name="Maxime Lefranc" image={maxPhoto} />
        <DevImage name="Thomas Lepine" image={thomasPhoto} />
        <DevImage name="Nouha Lamri" image={nouhaPhoto} />
        <DevImage name="Nicolas Mahieux" image={nicoPhoto} />
      </div>
      <div className="about__links">
        <Link className="about__links__link" to="/a-propos/contact/">
          Contact
        </Link>
        <Link className="about__links__link" to="/a-propos/mentions-legales/">
          Mentions légales
        </Link>
      </div>
    </motion.section>
  );
}

export default About;
