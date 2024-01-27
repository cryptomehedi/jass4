import Cover from "../Shared/Cover";
import PageTitle from "../Shared/PageTitle";
import ContactDetails from "./ContactDetails";
import contactData from "../../Data/ContactInfo.json"

const Contact = () => {
    return (
        <div>
            <PageTitle text="Contact Us" />
            <Cover title="Contact Us"/>
            <ContactDetails info={contactData} />
        </div>
    );
};

export default Contact;