import { GameContext } from '@store/GameContext';
import { useContext, useEffect } from 'react';

export const Monster = () => {
  const monsterContext = useContext(GameContext);
  const {
    monsterStats,
    setMonsterStats,
    turn,
    setTurn,
    multiplicator,
    setMultiplicator,
  } = monsterContext;

  useEffect(() => {
    if (monsterStats.REMAINING_HP <= 100) {
      return () => {
        setTurn(turn + 1);
        setMultiplicator(multiplicator + 0.1);
        setMonsterStats(null);
      };
    }
  }, [monsterStats.REMAINING_HP]);

  return (
    <div className="monster-card rounded w-25 text-white">
      <p>{monsterStats.NAME}</p>
      <p>{monsterStats.ATK}</p>
      <p>
        {monsterStats.REMAINING_HP} / {monsterStats.HP}
      </p>
    </div>
  );
};
