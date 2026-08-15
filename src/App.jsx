import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout';

import Exp from './pages/exp';
import Projects from './pages/projects';
import Council from './pages/council';
import Gallery from './pages/gallery';
import Publication from './pages/publication';
import Tech from './pages/tech';
import Contact from './pages/contact';
import EventsPage from './pages/bgy';
import Sec from './pages/sec';
import BlogPage from './pages/blogPage';

import BlogPost from './blogs/BlogPost';
import CErtify from './pages/CErtify';

// Single source of truth for the app's routes. Behaviour is identical to the
// previous hand-written <Route> list, just data-driven so it stays consistent.
const routes = [
  { path: '/cea/', element: <Exp /> },
  { path: '/cea/home1', element: <Exp /> },
  { path: '/cea/exp', element: <Exp /> },
  { path: '/cea/projects', element: <Projects /> },
  { path: '/cea/tech', element: <Tech /> },
  { path: '/cea/bgy', element: <EventsPage /> },
  { path: '/cea/events', element: <EventsPage /> },
  { path: '/cea/contact', element: <Contact /> },
  { path: '/cea/council', element: <Council /> },
  { path: '/cea/gallery', element: <Gallery /> },
  { path: '/cea/publication', element: <Publication /> },
  { path: '/cea/sec', element: <Sec /> },
  { path: '/cea/blogPage', element: <BlogPage /> },
  { path: '/cea/blog/:slug', element: <BlogPost /> },
  { path: '/cea/verify', element: <CErtify /> },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/cea/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
