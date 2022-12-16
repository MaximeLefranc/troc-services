import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import { findAdvertsBySkills } from '../../selectors/advertisements';
import { Adverts } from '../Cards/AdvertsCards';
import Card from '../Cards/Card';
import Spinner from '../Spinner';
import './styles.scss';

function AdvertFiltered() {
  const { slug } = useParams();
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const advertList = useSelector((state: GlobalState) =>
    findAdvertsBySkills(state.advertisements.listOfAdverts, slug)
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (!advertList) {
    return <div>Page 404</div>; //! Page 404 à faire
  }
  return (
    <section className="main">
      <h2 className="main__title">Annonces pour {slug}</h2>
      <section className="cards">
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
            />
          </Link>
        ))}
      </section>
    </section>
  );
}
export default AdvertFiltered;
