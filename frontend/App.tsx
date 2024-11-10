import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Afterhome from '../frontend/components/Afterhome'
import Home from '../frontend/components/Home'
import History from './components/History';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/transfermoney" element={<Afterhome />} />
          <Route path="/history" element={<History />} />
          
        </Routes>
      </div>
    </BrowserRouter>

    
    </>
  );
}

export default App;
