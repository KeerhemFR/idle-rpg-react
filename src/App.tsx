//React import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages import
import { Homepage } from '@pages/Homepage';
import { Game } from '@pages/Game';
//Style import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Content import
import { ROUTING } from '@contents/routing';
import { GameProvider } from '@store/GameContext';

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <div className="screen-container">
          <Routes>
            <Route path={ROUTING.HOME} element={<Homepage />} />
            <Route path={ROUTING.GAME} element={<Game />} />
          </Routes>
        </div>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
