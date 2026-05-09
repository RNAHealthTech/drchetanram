import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import TreatmentsPage from "./pages/TreatmentsPage";
import ConditionsPage from "./pages/ConditionsPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import TreatmentTemplatePage from "./pages/TreatmentTemplatePage";
import { BlogTemplate } from "./pages/BlogTemplate";
import { HelmetProvider } from "react-helmet-async";
import DelhiPage from "./pages/DelhiPage";
import GurgaonPage from "./pages/GurgaonPage";
import SirGangaRamPage from "./pages/SrghPage";
import NotFound from "./pages/NotFound";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const App: React.FC = () => {
  useScrollToTop();

  return (
    <HelmetProvider>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/best-spine-surgeon-in-delhi' element={<DelhiPage />} />
        <Route path="/best-spine-surgeon-in-gurgaon" element={<GurgaonPage />} />
        <Route path="/best-spine-doctor-in-sir-ganga-ram-hospital" element={<SirGangaRamPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/treatments' element={<TreatmentsPage />} />
        <Route path="/treatments/:slug" element={<TreatmentTemplatePage />} />
        <Route path='/conditions' element={<ConditionsPage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:slug' element={<BlogTemplate />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    </HelmetProvider>
  )
}

export default App;