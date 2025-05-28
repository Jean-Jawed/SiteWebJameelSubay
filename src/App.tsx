import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Layout Components
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SingleGalleryPage from './pages/SingleGalleryPage';
import NotFoundPage from './pages/NotFoundPage';

// Data
import { galleries } from './data/galleries';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            {galleries.map((gallery) => (
              <Route 
                key={gallery.id}
                path={`gallery/${gallery.slug}`} 
                element={<SingleGalleryPage galleryId={gallery.id} />} 
              />
            ))}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;