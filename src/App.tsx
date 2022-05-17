import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Etc from './pages/Etc';
import Home from './pages/Home';
import LibAni from './pages/LibAni';
import LibEtc from './pages/LibEtc';
import LibRedux from './pages/LibRedux';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import SubPage from './pages/SubPage';
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/libani" element={<LibAni />} />
          <Route path="/libetc" element={<LibEtc />} />
          <Route path="/libredux" element={<LibRedux />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/subpage" element={<SubPage />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
