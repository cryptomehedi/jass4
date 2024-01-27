// import { Link } from "react-router-dom";
import logo from "../../assets/jass4-logo.png";
import CustomLink from "./CustomLink";



const Navbar = () => {

    const menuItems =   <>
                            <li><CustomLink to="/">Home</CustomLink></li>
                            <li><CustomLink to="/products">Products</CustomLink></li>
                            <li><CustomLink to="/services">Services</CustomLink></li>
                            <li><CustomLink to="/about">About</CustomLink></li>
                            <li><CustomLink to="/contact-us">Contact Us</CustomLink></li>
                        </>

  return (
        <div className="container mx-auto relative z-50">
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar lg:navbar-start">
                    <div>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <CustomLink to="/" className="btn btn-ghost normal-case  text-xl"><img className="h-full" src={logo} alt="JASS4"/></CustomLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex lg:mr-10">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
  );
};

export default Navbar;
