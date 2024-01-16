const FeaturesCard = ({info}) => {
    const {img, name, bg} = info

    return (
        <div className={` text-center `}>
             <div className="card w-64 bg-base-100 shadow-xl image-full">
             <figure><img src={bg} alt={name} /></figure>
             <div className="card-body">
                 <h2 className="card-title flex justify-center"><img src={img} alt="" /></h2>
                 <p className='text-base font-bold'>{name}</p>
             </div>
             </div>
         </div>
    );
};

export default FeaturesCard;