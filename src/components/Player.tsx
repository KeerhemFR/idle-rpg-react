//React import
import { useState, useContext, useEffect } from 'react';
//Context import
import { GameContext } from '@store/GameContext';
//Utils import
import { playerAttack } from '@utils/playerAttack';

/**
 * Component handling the player's data
 * Handle the player level up when wanted amount of exp is obtained
 *
 * @returns
 */
export const Player = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const playerContext = useContext(GameContext);
  const { monsterStats, setMonsterStats, playerStats, setPlayerStats } =
    playerContext;

  /**
   * Handle the player's level up
   * Will randomly increase one of it's stats by picking up in the array
   */
  useEffect(() => {
    if (playerStats.EXP >= playerStats.NEXT_LVL) {
      const statsArray = [
        {
          ...playerStats,
          EXP: Math.round(playerStats.EXP - playerStats.NEXT_LVL),
          NEXT_LVL: Math.round(playerStats.NEXT_LVL * 1.1),
          ATK: Math.round(playerStats.ATK + 50),
          REMAINING_HP: playerStats.HP,
          LVL: playerStats.LVL + 1,
        },
        {
          ...playerStats,
          EXP: Math.round(playerStats.EXP - playerStats.NEXT_LVL),
          NEXT_LVL: Math.round(playerStats.NEXT_LVL * 1.1),
          HP: Math.round(playerStats.HP + 500),
          REMAINING_HP: Math.round(playerStats.HP + 500),
          LVL: playerStats.LVL + 1,
        },
        {
          ...playerStats,
          EXP: Math.round(playerStats.EXP - playerStats.NEXT_LVL),
          NEXT_LVL: Math.round(playerStats.NEXT_LVL * 1.1),
          DEF: Math.round(playerStats.DEF + 50),
          REMAINING_HP: playerStats.HP,
          LVL: playerStats.LVL + 1,
        },
        {
          ...playerStats,
          EXP: Math.round(playerStats.EXP - playerStats.NEXT_LVL),
          NEXT_LVL: Math.round(playerStats.NEXT_LVL * 1.1),
          CRIT: Math.round(playerStats.CRIT + 5),
          REMAINING_HP: playerStats.HP,
          LVL: playerStats.LVL + 1,
        },
      ];

      setPlayerStats(
        statsArray[Math.round(Math.random() * statsArray.length - 1)]
      );
    }
  }, [playerStats.EXP]);

  /**
   * Will handle the attack button behaviour
   * Launch the playerAttack function and wait for it to end before making the button enable again
   */
  const handleClick = async () => {
    setIsDisabled(true);

    await playerAttack(
      monsterStats,
      setMonsterStats,
      playerStats,
      setPlayerStats
    );

    setIsDisabled(false);
  };

  return (
    <div className="player-card rounded w-25">
      <p>LEVEL: {playerStats.LVL}</p>
      <div className="d-flex flex-row justify-content-around">
        <p>ATK:{playerStats.ATK}</p>
        <p>CRIT: {playerStats.CRIT}</p>
        <p>DEF: {playerStats.DEF}</p>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <p>EXP: {playerStats.EXP}</p>
        <p>NEXT LEVEL: {playerStats.NEXT_LVL}</p>
      </div>
      <p>
        HP: {playerStats.REMAINING_HP} / {playerStats.HP}
      </p>
      <div className="d-flex flex-row justify-content-center">
        <button
          className="btn btn-success"
          onClick={() => handleClick()}
          disabled={isDisabled}
        >
          Attack
        </button>
      </div>
    </div>
  );
};
