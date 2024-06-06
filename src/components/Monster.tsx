//React import
import { useContext, useEffect } from 'react';
//Context import
import { GameContext } from '@store/GameContext';

/**
 * Components handling the monster data
 * Also manage the actions occuring when the monster die
 *
 * @returns {React.ReactElement} Monster card with its informations
 */
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

  /**
   * Unmount the component when the monster faint
   * Will update the turn number, the multiplicator, and the player's amount of experience
   * Then will empty the monster's data
   */
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
