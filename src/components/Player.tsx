import { useState } from 'react';
import { GameContext } from '@store/GameContext';
import { playerAttack } from '@utils/playerAttack';
import { useContext, useEffect } from 'react';

export const Player = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const playerContext = useContext(GameContext);
  const { monsterStats, setMonsterStats, playerStats, setPlayerStats } =
    playerContext;

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
