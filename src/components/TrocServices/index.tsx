import { Route, Routes, useLocation } from 'react-router-dom';
import AdvertDetail from '../AdvertDetail';
import Footer from '../Footer';
import Main from '../Main';
import Welcome from '../Welcome';

interface Location {
  pathname: string;
}

function TrocServices(): JSX.Element {
  const { pathname } = useLocation() as Location;
  const isWelcomePage: boolean = pathname === '/';
  return (
    <div className="TrocServices">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/accueil" element={<Main />} />
        <Route path="/annonces/1" element={<AdvertDetail />} />
      </Routes>
      {!isWelcomePage && <Footer />}
    </div>
  );
}

export default TrocServices;
