// ---- React Import ----
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

// ---- Framer-Motion Import ----
import { AnimatePresence } from 'framer-motion';

// ---- Components Import ----
import About from '../About';
import AdvertDetail from '../AdvertDetail';
import AdvertsCards from '../Cards/AdvertsCards';
import ProfilesCards from '../Cards/ProfilesCards';
import Footer from '../Layout/Footer';
import InscriptionForm from '../InscriptionForm';
import Header from '../Layout/Header';
import LogInForm from '../LogInForm';
import ProfileDetail from '../ProfileDetail';
import Welcome from '../Welcome';
import ProfileFiltered from '../ProfilesFiltered';
import ListMessages from '../ListMessages';
import DetailMessage from '../ListMessages/DetailMessage';
import FormMessage from '../ListMessages/FormMessage';
import ContactForm from '../About/ContactForm';
import LeaveAdvert from '../LeaveAdvert/LeaveAdvert';
import AdvertFiltered from '../AdvertFiltered';
import NotFound404 from '../NotFound404';
import LegalNotice from '../About/LegalNotice';

// ---- Actions Import ----
import { actionHaveTokenInLocalstorage } from '../../actions/user';
import { actionFetchAdvertsementsSkillsAndUsers } from '../../actions/advertisements';
import { actionFetchAllMessagesForOneUser } from '../../actions/messages';

function TrocServices(): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();
  const isWelcomePage: boolean = location.pathname === '/';
  useEffect(() => {
    dispatch(actionFetchAdvertsementsSkillsAndUsers());
    dispatch(actionHaveTokenInLocalstorage());
  }, []);
  useEffect(() => {
    if (localStorage.getItem('token_troc_services')) {
      dispatch(actionFetchAllMessagesForOneUser());
    }
    window.scrollTo(0, 0);
  });
  return (
    <div className="TrocServices">
      <LogInForm />
      {!isWelcomePage && <Header />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/accueil" element={<AdvertsCards />} />
          <Route path="/inscription" element={<InscriptionForm />} />
          <Route path="/profils" element={<ProfilesCards />} />
          <Route path="/profils/filtre/" element={<ProfileFiltered />} />
          <Route path="/profils/:slug" element={<ProfileDetail />} />
          <Route path="/profils/:slug/modifier" element={<InscriptionForm />} />
          <Route
            path="/profils/competence/:slug"
            element={<ProfileFiltered />}
          />
          <Route path="/profils/messages/recus" element={<ListMessages />} />
          <Route path="/profils/messages/envoyes" element={<ListMessages />} />
          <Route path="/profils/messages/:slug" element={<DetailMessage />} />
          <Route path="/annonces/:slug" element={<AdvertDetail />} />
          <Route path="/annonces/:slug/modifier" element={<LeaveAdvert />} />
          <Route
            path="/annonces/categorie/:slug"
            element={<AdvertFiltered />}
          />
          <Route path="/annonces/filtre/" element={<AdvertFiltered />} />
          <Route path="/nouvelle-annonce" element={<LeaveAdvert />} />
          <Route
            path="/annonces/:idAnnonce/envoyer-message/:idProfile"
            element={<FormMessage />}
          />
          <Route
            path="/profils/:idProfile/envoyer-message"
            element={<FormMessage />}
          />
          <Route path="/a-propos" element={<About />} />
          <Route path="/a-propos/contact/" element={<ContactForm />} />
          <Route path="/a-propos/mentions-legales/" element={<LegalNotice />} />
          <Route path="*" element={<NotFound404 is404={true} />} />
        </Routes>
      </AnimatePresence>
      {!isWelcomePage && <Footer />}
    </div>
  );
}

export default TrocServices;
