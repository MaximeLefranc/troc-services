import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Welcome from '../Welcome';
import './styles.scss';

function TrocServices() {
  return (
    <div className="TrocServices">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default TrocServices;
