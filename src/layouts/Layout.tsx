import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="ambient" aria-hidden="true">
        <div className="ambient__orb ambient__orb--1" />
        <div className="ambient__orb ambient__orb--2" />
      </div>
      <div className="noise" aria-hidden="true" />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
