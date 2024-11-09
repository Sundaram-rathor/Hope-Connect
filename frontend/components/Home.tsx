import { useEffect, useState } from 'react'
import { useNavigate  } from "react-router-dom"
import { TopBanner } from "./TopBanner";
import Card from "./Card";
import axios from 'axios'


function Home() {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards');
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);
  return (
    <div>
        <TopBanner/>
        <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 space-x-4">
      {cards.map((card, index) => (
        <Card key={index} cardData={card} />
      ))}
    </div>
        <div>
        <button onClick={()=>navigate('/transfermoney')}>transfermoney</button>
        
        </div>
    </div>
  )
}

export default Home