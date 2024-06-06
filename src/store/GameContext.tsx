import {
  GameContextType,
  MonsterStats,
  PlayerStats,
} from '@interfaces/gamecontext.types';
import { createContext, useState } from 'react';

interface GameProviderType {
  children: React.ReactNode;
}

export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider: React.FC<GameProviderType> = ({ children }) => {
  const [turn, setTurn] = useState<number>(1);
  const [multiplicator, setMultiplicator] = useState<number>(1);
  const [monsterStats, setMonsterStats] = useState<MonsterStats | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);

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
