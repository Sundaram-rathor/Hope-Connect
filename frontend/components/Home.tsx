import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBanner } from "./TopBanner";
import Card from "./Card";
import CardModal from "./CardModal"; // Import the CardModal component
import axios from 'axios';

function Home() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card for modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/user/allorg');
        setCards(response.data.allorg);
        console.log(response.data.allorg);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const openModal = (cardData:any) => setSelectedCard(cardData); // Function to open modal with card data
  const closeModal = () => setSelectedCard(null); // Function to close modal

  return (
    <>
    <div>
      <TopBanner />
      <div className='text-7xl font-serif w-full shadow-lg h-[15vh] flex items-center justify-center' ><div>Hope Foundation</div></div>
      <div><button onClick={()=>navigate('/history')} className="mt-4 px-4 py-2 bg-[#1A1A1D] text-white font-semibold rounded hover:bg-[black] ml-16">Donation History</button></div>
      <div className="flex flex-wrap justify-center items-center mt-10">
        {cards.map((card, index) => (
          <Card key={index} cardData={card} onLearnMore={() => openModal(card)} />
        ))}
      </div>
      {/* Conditionally render CardModal if a card is selected */}
      
    </div>
    <div>{selectedCard && <CardModal cardData={selectedCard} onClose={closeModal} />}</div>
    </>
  );
}

export default Home;
