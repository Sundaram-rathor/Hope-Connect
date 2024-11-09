

const Card = ({cardData}) => {
 // const [cardData, setCardData] = useState(null);

  

  if (!cardData) return <p>Loading...</p>;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={cardData.imageUrl}
        alt={cardData.title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{cardData.title}</h2>
        <p className="mt-2 text-gray-600">{cardData.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;

