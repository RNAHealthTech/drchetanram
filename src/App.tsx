import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./pages/Home";

const useScrollToTop = () => {
  const {pathname} = useLocation();

  React.useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);
};

const App: React.FC = () => {
  useScrollToTop();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App;