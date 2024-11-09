import { BrowserRouter , Routes,Route } from 'react-router-dom';
import TransferMoney from '../frontend/components/TransferMoney'
import Home from '../frontend/components/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/transfermoney" element={<TransferMoney />} />
          
        </Routes>
      </div>
    </BrowserRouter>

    
    </>
  );
}

export default App;
