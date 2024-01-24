import img1 from "../../assets/About-Img/icon-mission.png";
import img2 from "../../assets/About-Img/icon-vision.png";

const ABoutFeature = () => {
  const features = [
    {
      id: 1,
      img: img1,
      headerStart: "OUR",
      headerEnd: "MISSION",
      desecration:
        "We strive to be a world class company in core business, empower our staff to excel, ensure best customers satisfaction, maintain high standards of corporate governance and fulfil our role as a responsible corporate citizen.",
    },
    {
      id: 2,
      img: img2,
      headerStart: "OUR",
      headerEnd: "VISION",
      desecration:
        "Our Vision is to be a professionally managed company, committed to total customer satisfaction. Strive to constantly create value to the service we provide by bringing in professional touch to the service we offer, In short “To be a globally recognized company that provides one stop centre for lubricant solutions.",
    },
  ];

  return (
    <div className="bg-[#EEA11D]">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {features.map((feature) => {
              return (
                <div key={feature.id} className="p-4 lg:w-1/2 md:w-full">
                  <div className="flex border-2 rounded-lg md:h-64 text-white border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <img src={feature.img} alt="" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-3xl font-thin title-font mb-3">
                        {feature.headerStart} <span className="font-bold">{feature.headerEnd}</span>
                      </h2>
                      <p className="leading-relaxed text-base">
                        {feature.desecration}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ABoutFeature;
