/**
 * Calculate the different results when the user is triggering an attack
 *
 * @param {Object} monsterStats stats of the monster stocked in the context
 * @param {React.Dispatch} setMonsterStats setState of the monster stats
 * @param {Object} playerStats stats of the player stocked in the context
 * @param {React.Dispatch} setPlayerStats setState of the player stats
 */
export const playerAttack = async (
  monsterStats,
  setMonsterStats,
  playerStats,
  setPlayerStats
) => {
  //Calculate a range of 20% up or down the player attack stat
  const damage = Math.round(playerStats.ATK * (0.8 + Math.random() * 0.4));
  //Calculate a range of 20% up or down the monster attack stat, taking account of the player defense
  const receivedDamage = Math.round(
    monsterStats.ATK * (0.8 + Math.random() * 0.4) - playerStats.DEF
  );
  //Delay between monster received damages and player received damages
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  //Calculate if a critical hit is done by the player
  if (Math.round(Math.random() * 100) < playerStats.CRIT) {
    setMonsterStats({
      ...monsterStats,
      REMAINING_HP: monsterStats.REMAINING_HP - damage * 2,
    });
  } else {
    setMonsterStats({
      ...monsterStats,
      REMAINING_HP: monsterStats.REMAINING_HP - damage,
    });
  }

  await delay(500);

  //If the monster remaining HP isn't lower than the player attack, the damage calculation is done
  if (monsterStats.REMAINING_HP > playerStats.ATK) {
    setPlayerStats({
      ...playerStats,
      REMAINING_HP: playerStats.REMAINING_HP - receivedDamage,
    });
  }
};
