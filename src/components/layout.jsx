import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

/**
 * Shared page shell: renders the navbar and footer once and swaps the
 * routed page in between via <Outlet />. Keeps the visual layout identical
 * while removing the need to repeat Navbar/Footer around every route.
 *
 * Also resets scroll to the top on every route change and on reload, so pages
 * always open from the top instead of keeping the previous scroll position.
 */
const Layout = () => {
  const { pathname } = useLocation();

  // Stop the browser from restoring the previous scroll position on reload.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to the top whenever the route changes (and on initial load).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
