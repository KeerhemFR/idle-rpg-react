//React import
import { createContext, useState } from 'react';
//Types import
import {
  GameContextType,
  MonsterStats,
  PlayerStats,
} from '@interfaces/gamecontext.types';

interface GameProviderType {
  children: React.ReactNode;
}

export const GameContext = createContext<GameContextType | null>(null);

/**
 * Context for the application
 * Settled context variable default value and make them accessible through the entire app
 *
 * @param {React.ReactNode} children all that will be included inside the context
 * @returns {React.Provider} a provider to allow all the app to access this context data
 */
export const GameProvider: React.FC<GameProviderType> = ({ children }) => {
  const [turn, setTurn] = useState<number>(1);
  const [multiplicator, setMultiplicator] = useState<number>(1);
  const [monsterStats, setMonsterStats] = useState<MonsterStats | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>({
    LVL: 1,
    ATK: 100,
    DEF: 50,
    HP: 4000,
    REMAINING_HP: 4000,
    CRIT: 5,
    EXP: 0,
    NEXT_LVL: 100,
  });

  return (
    <GameContext.Provider
      value={{
        turn,
        setTurn,
        multiplicator,
        setMultiplicator,
        monsterStats,
        setMonsterStats,
        playerStats,
        setPlayerStats,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
