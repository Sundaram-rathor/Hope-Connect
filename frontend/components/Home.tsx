import { useNavigate } from "react-router-dom"
import { TopBanner } from "./TopBanner";
import Card from "./Card";


function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <TopBanner/>
        <Card/>
        <div>
        <button onClick={()=>navigate('/transfermoney')}>transfermoney</button>
        
        </div>
    </div>
  )
}

export default Home