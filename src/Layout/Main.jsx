import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import ScrollToTop from "../Pages/Shared/ScrollToTop";

const Main = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div className=''>
        <ScrollToTop/>
        <Outlet /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Main;
