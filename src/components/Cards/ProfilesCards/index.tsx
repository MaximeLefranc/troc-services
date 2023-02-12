// ---- React Import ----
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ---- Framer-Motion Import ----
import { motion } from 'framer-motion';
import { variantsCards } from '../../../utils/framerMotionVariants';

// ---- TypeScript Import ----
import { GlobalState } from '../../../reducers';

// ---- Components Import ----
import NotFound404 from '../../NotFound404';
import Spinner from '../../Spinner';
import Card from '../Card';

export interface User {
  biography: string;
  id: number;
  nickname: string;
  imageName: string;
  city: string;
  zip_code: string;
  roles: string[];
  advertisements: {
    id: number;
    title: string;
    content: string;
    imageName: string;
    isHidden: boolean;
    approved: boolean;
  }[];
  skill: { id: number; name: string }[];
}

function ProfilesCards(): JSX.Element {
  const usersFromSate = useSelector(
    (state: GlobalState) => state.user.listOfMembers
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  if (isLoading) {
    return <Spinner />;
  }
  if (usersFromSate.length === 0) {
    return <NotFound404 is404={true} />;
  }
  return (
    <section className="main">
      <h2 className="main__title">Les derniers membres</h2>
      <motion.section
        className="cards"
        initial="hide"
        animate="show"
        exit="hide"
        variants={variantsCards}
      >
        {usersFromSate.map((user: User) => (
          <Link
            key={user.id}
            className="cards__link"
            to={`/profils/${user.nickname}`}
          >
            <Card
              key={user.id}
              image={user.imageName}
              title={user.nickname}
              description={user.biography}
              skills={user.skill}
              city={user.city}
              zipCode={user.zip_code}
            />
          </Link>
        ))}
      </motion.section>
    </section>
  );
}

export default ProfilesCards;
