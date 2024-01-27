import Cover from "../Shared/Cover";
import PageTitle from "../Shared/PageTitle";
import ServiceDistributor from "./ServiceDistributor";
import ServiceLevel from "./ServiceLevel";
import ServiceToll from "./ServiceToll";

const Services = () => {
    return (
        <div>
            <PageTitle text="Services"/>
            <Cover title="Services"/>
            <div className="container mx-auto" >
                <ServiceDistributor/>
                <ServiceToll/>
                <ServiceLevel/>
            </div>
        </div>
    );
};

export default Services;