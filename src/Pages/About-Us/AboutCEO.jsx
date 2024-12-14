import img from "../../assets/About-Img/CEO.png";

const AboutCEO = () => {
  return (
    <div className="mx-4 card">
      <div className="card-side">
        <div className="mx-auto rounded-xl shadow-xl  md:max-w-2xl">
          <div className="md:flex">
            <div className="flex justify-center">
              <div className="avatar h-44 md:p-5 md:h-56">
                <div className="ring-orange-400 ring-offset-base-100 rounded-full ring ring-offset-2">
                  <img className="" src={img} />
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="mt-4">
                <span className="text-3xl font-bold">Md. Sanwar Hossain</span>
                <br />
                <span className=" text-sm ml-2">
                  Chairman of Jass4 Lubricant
                </span>
                <br />
                <span className=" text-sm ml-2">
                  CEO, Saudi Arabia Construction Business
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default AboutCEO;
