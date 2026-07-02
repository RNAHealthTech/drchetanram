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

  const isMaintenance = true;

  if (isMaintenance) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
        <div className="text-center p-10 max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100">
          <svg className="w-20 h-20 mx-auto text-blue-600 mb-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Website Under Maintenance</h1>
          <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed">
            We are currently performing scheduled maintenance to improve our services. We will be back online shortly. Thank you for your patience!
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </div>
    );
  }

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