import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import TreatmentsPage from "./pages/TreatmentsPage";
import ConditionsPage from "./pages/ConditionsPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const App: React.FC = () => {
  useScrollToTop();

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/treatments' element={<TreatmentsPage />} />
        <Route path='/conditions' element={<ConditionsPage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App;