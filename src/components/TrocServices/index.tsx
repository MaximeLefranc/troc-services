import { Route, Routes, useLocation } from 'react-router-dom';
import AdvertDetail from '../AdvertDetail';
import AdvertsCards from '../Cards/AdvertsCards';
import ProfilesCards from '../Cards/ProfilesCards';
import Footer from '../Footer';
import LogInForm from '../LogInForm';
import Welcome from '../Welcome';

interface Location {
  pathname: string;
}

function TrocServices(): JSX.Element {
  const { pathname } = useLocation() as Location;
  const isWelcomePage: boolean = pathname === '/';
  return (
    <div className="TrocServices">
      <LogInForm />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/accueil" element={<AdvertsCards />} />
        <Route path="/profils" element={<ProfilesCards />} />
        <Route path="/annonces/1" element={<AdvertDetail />} />
      </Routes>
      {!isWelcomePage && <Footer />}
    </div>
  );
}

export default TrocServices;
