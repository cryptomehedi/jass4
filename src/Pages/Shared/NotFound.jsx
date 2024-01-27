import { Link } from "react-router-dom";
import home from "../../assets/home.svg";

const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-7xl font-semibold text-orange-500">
          4<span className="text-blue-700">0</span>4
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-blue-700 sm:text-5xl">
          Page <span className="text-orange-500">Not</span> Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to='/'>
            <button className="rounded-md bg-indigo-600 px-3.5 flex items-center py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Please Go back <img className="w-8 ml-2 " src={home} alt="Home" />
            </button>
          </Link>
          {/* <a href="https://jass4.com" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </main>
  );
};

export default NotFound;
