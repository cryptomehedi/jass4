
const Cover = ({title, img}) => {
  return (
    <div>
      <div
        className="py-4 md:py-8"
        style={{
          backgroundImage: img ? `url("${img}")` : "",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title ? title : 'JASS4'}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
