import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { GlobalState } from '../../reducers';
import { findAdvertsBySkills } from '../../selectors/advertisements';
import { Adverts } from '../Cards/AdvertsCards';
import Card from '../Cards/Card';
import NotFound404 from '../NotFound404';
import Spinner from '../Spinner';
import './styles.scss';

function AdvertFiltered() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const advertList = useSelector((state: GlobalState) =>
    findAdvertsBySkills(state.advertisements.listOfAdverts, slug)
  );
  const advertListFromSearchBar = useSelector(
    (state: GlobalState) => state.searchBar.result
  );

  if (isLoading) {
    return <Spinner />;
  }

  let result;
  if (pathname.split('/')[2] === 'filtre') {
    result = advertListFromSearchBar;
  } else {
    result = advertList;
  }

  if (!result || result.length === 0) {
    if (slug) {
      return (
        <NotFound404
          message={`Pas d'annonce trouvée dans la catégorie ${slug}`}
        />
      );
    } else {
      return (
        <NotFound404
          message={`Pas d'annonce trouvée pour votre recherche... Try again`}
        />
      );
    }
  }
  return (
    <section className="main">
      {slug ? (
        <h2 className="main__title">Annonces pour {slug}</h2>
      ) : (
        <h2 className="main__title">Résultat de votre recherche :</h2>
      )}
      <section className="cards">
        {result.map((advert: Adverts) => (
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
      </section>
    </section>
  );
}
export default AdvertFiltered;
