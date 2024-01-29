
const TestimonialSlideCard = ({info}) => {
    const {description , img, name} = info

    return (
        <div className='px-9 p-5 grid grid-rows-2 h-80 shadow-2xl rounded-lg'>
                        <div className="w-full">
                            <div className="leading-relaxed mb-3">{description.length < 230 ? description : <p>{description.slice(0,230)} .......</p>}</div>
                        </div>
                        <div className='flex justify-start items-center mt-9'>
                            <img className='border-2 rounded-full w-20 border-primary' src={img} alt={`${name} || JASS4 Lubricant`} />
                            <div className='ml-5'>
                                <h3 className='text-2xl text-accent font-semibold'>{name}</h3>
                            </div>
                        </div>
                    </div>
    );
};

export default TestimonialSlideCard;