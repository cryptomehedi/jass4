import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div className=''><Outlet /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Main;
