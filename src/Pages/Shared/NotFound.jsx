import { Link } from "react-router-dom";
import home from "../../assets/home.svg";

const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-white bg-notFound bg-fixed bg-center bg-no-repeat py-24 sm:py-32 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-slate-800 -mx-4">
          <div className="w-full px-4 text-center ">
            <div className="w-full  lg:w-10/12 xl:w-8/12 mx-auto">
              <div>
                <h1 className="text-8xl  mt-28 lg:mt-7 md:text-9xl absolute inset-0 ">
                  404
                </h1>
              </div>
              <div className="mt-[370px] lg:mt-[300px] md:mt-[-50px]">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                  Look like you are lost
                </h3>
                <p className="text-lg md:text-xl text-gray-700">
                  the page you are looking for is not available!
                </p>
                <div className="mt-2 relative flex items-center justify-center gap-x-6">
                  <Link to="/">
                    <button className="rounded-md bg-orange-500 px-3.5 flex items-center py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Please Go back{" "}
                      <img className="w-8 ml-2 " src={home} alt="Home" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center">
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
        </div>
      </div> */}
    </main>
  );
};

export default NotFound;
