//React import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages import
import { Homepage } from './pages/Homepage';

//Style import
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="screen-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
