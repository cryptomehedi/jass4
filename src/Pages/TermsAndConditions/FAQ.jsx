import { useState } from 'react';
import faqData from '../../Data/faq.json'
import Cover from '../Shared/Cover';
import PageTitle from '../Shared/PageTitle';



const FAQ = () => {
    // eslint-disable-next-line no-unused-vars
    const [faqs, setFaqs] = useState(faqData)
    return (
        <div>
            <PageTitle text='FAQ' />
            <Cover title="FAQ" />
            <div className='container mx-auto p-8 md:p-8' >
                {
                    faqs.map(faq =>{
                        return    <div key={faq.id} className="collapse collapse-arrow mb-4 bg-base-200">
                                        <input type="radio" name="my-accordion-3" /> 
                                        <div className="collapse-title text-xl font-medium">
                                            Q. {faq.q}?
                                        </div>
                                        <div className="collapse-content"> 
                                            <p><span className='text-xl'>Ans :</span> {faq.ans}</p>
                                        </div>
                                    </div>
                    })
                }
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;