const FeaturesCard = ({info}) => {
    const {img, name, bg} = info

    return (
        <div className={`text-center `}>
             <div className="card w-full bg-base-100 shadow-xl image-full">
             <figure><img className="w-full object-cover" src={bg} alt={`${name} || JASS4 Lubricant`} /></figure>
             <div className=" text-white flex justify-center items-center flex-col z-50">
                 <h2 className="card-title justify-center"><img src={img} alt="" /></h2>
                 <p className='text-base font-bold'>{name}</p>
             </div>
             </div>
         </div>
    );
};

export default FeaturesCard;