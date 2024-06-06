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
    playerStats,
    setPlayerStats,
  } = monsterContext;

  useEffect(() => {
    if (monsterStats.REMAINING_HP <= playerStats.ATK) {
      return () => {
        setTurn(turn + 1);
        setMultiplicator(multiplicator + 0.1);
        setPlayerStats({
          ...playerStats,
          EXP: playerStats.EXP + monsterStats.EXP,
        });

        setMonsterStats(null);
      };
    }
  }, [monsterStats.REMAINING_HP]);

  return (
    <div className="monster-card rounded w-25">
      <p>{monsterStats.NAME}</p>
      <p>ATK: {monsterStats.ATK}</p>
      <p>
        HP: {monsterStats.REMAINING_HP} / {monsterStats.HP}
      </p>
    </div>
  );
};
