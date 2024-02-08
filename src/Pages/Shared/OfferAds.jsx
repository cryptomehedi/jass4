import img from "/Offer/JASS4-Offer.jpg"

const OfferAds = ({setAds}) => {
    
    return (
        <div >
            <input type="checkbox" defaultChecked id="ads-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className=" md:w-2/3 md:max-w-xl modal-box bg-white">
                    <label htmlFor="ads-modal" onClick={()=> setAds(false)} className="btn btn-sm btn-circle absolute right-5 top-5">✕</label>
                    <div><img className="rounded-lg h-auto" src={img} alt="JASS4 Lubricant" /></div>
                </div>
                <label className="modal-backdrop" onClick={()=> setAds(false)} htmlFor="ads-modal">Close</label>
            </div>
        </div>
    );
};

export default OfferAds;