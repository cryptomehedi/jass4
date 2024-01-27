
const TestimonialSlideCard = ({info}) => {
    const {description , img, name} = info

    return (
        <div className='px-9 p-5 shadow-2xl rounded-lg'>
                        <div className="w-full ">
                            <p className="leading-relaxed mb-3">{description}</p>
                        </div>
                        <div className='flex justify-start items-center mt-9'>
                            <img className='border-2 rounded-full w-20 border-primary' src={img} alt="" />
                            <div className='ml-5'>
                                <h3 className='text-2xl text-accent font-semibold'>{name}</h3>
                            </div>
                        </div>
                    </div>
    );
};

export default TestimonialSlideCard;