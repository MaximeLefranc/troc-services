import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import { findAdvertsBySkills } from '../../selectors/advertisements';
import { Adverts } from '../Cards/AdvertsCards';
import Card from '../Cards/Card';
import './styles.scss';

function AdvertList() {
  const { slug } = useParams();
  const listOfAdverts = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );
  const advertList: Adverts[] | false = findAdvertsBySkills(
    listOfAdverts,
    slug
  );
  if (advertList === false) {
    console.log("page 404 si pas d'annonce");
    return <div>Page 404</div>;
    //! return "Navigate" to 404
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
export default AdvertList;
