const Card = ({ cardData, onLearnMore }:any) => {
  if (!cardData) return <p>Loading...</p>;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-contain"
        src={cardData.imgUrl}
        alt={cardData.title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{cardData.title}</h2>
        <p className="mt-2 text-gray-600">{cardData.description}</p>
        <button 
          onClick={onLearnMore}
          className="mt-4 px-4 py-2 bg-[#1A1A1D] text-white font-semibold rounded hover:bg-[black]"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
