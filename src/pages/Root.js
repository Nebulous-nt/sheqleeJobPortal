import { Outlet } from "react-router-dom";

import Navbar from "../components/navigationBar/Navbar";
import Footer from "../components/footer/Footer";
//import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
