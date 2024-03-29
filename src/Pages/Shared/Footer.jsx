import { Link } from "react-router-dom";
import logo from "../../assets/jass4-logo.png";
import img from '../../assets/save.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Menu</header> 
          <Link to='/' className="link link-hover">Home</Link>
          <Link to='about' className="link link-hover">About Us</Link>
          <a className="link link-hover">Brands</a>
          <Link to='products' className="link link-hover">Products</Link>
          <Link to='services' className="link link-hover">Services</Link>
          <Link to='contact' className="link link-hover">Contact Us</Link>
        </nav> 
        <nav>
          <header className="footer-title">Products</header> 
          <a className="link link-hover">Automatic Transmission Fluids</a>
          <a className="link link-hover">Compressor Oils (P) Series</a>
          <a className="link link-hover">Compressor Oils (r) Series</a>
          <a className="link link-hover">Industrial Gear Oil</a>
          <a className="link link-hover">Semi Synthetic Engine Oil</a>
          <a className="link link-hover">Slideway Oil Series</a>
          <a className="link link-hover">Turbine Oil</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <Link to='T&C' className="link link-hover">Terms of use</Link>
          <Link to='privacy' className="link link-hover">Privacy policy</Link>
          <Link to='cookies' className="link link-hover">Cookie policy</Link>
          <Link to='faq' className="link link-hover">FAQ</Link>
        </nav>
      </footer> 
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
      <aside>
          <div className="w-1/3">
            <img src={logo} alt="JASS4 Lubricant" srcSet="" />
          </div>
          <p>
            JASS4 Brothers Petroleum Ltd. Since 2012
            <br />
            <img className="w-32 md:w-40" src={img} alt="JASS4 Lubricant" />
          </p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer>

      <div className=" text-center py-4 space-y-2 lg:flex lg:justify-between container mx-auto px-4 md:px-0">
        <div>
          &copy; 2023 - {new Date().getFullYear()} | All Rights Reserved by{" "}
          <span className="font-bold text-lg">JASS4</span>{" "}
        </div>
        <div className="text-stone-400">
          Design & Developed by{" "}
          <a
            className="font-bold"
            rel="noreferrer"
            target="_blank"
            href="https://crypto-mehedi.web.app/"
          >
            Mehedi Hasan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
