import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import ScrollToTop from "../Pages/Shared/ScrollToTop";
import OfferAds from "../Pages/Shared/OfferAds";
import { useState } from "react";

const Main = () => {
  const [ads, setAds] = useState(false)
  return (
    <div>
      <div><Navbar /></div>
      {
        ads && <OfferAds setAds={setAds} />
      }
      <div className=''>
        <ScrollToTop/>
        <Outlet /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Main;
