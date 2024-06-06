export const playerAttack = async (
  monsterStats,
  setMonsterStats,
  playerStats,
  setPlayerStats
) => {
  const damage = Math.round(playerStats.ATK * (0.8 + Math.random() * 0.4));
  const receivedDamage = Math.round(
    monsterStats.ATK * (0.8 + Math.random() * 0.4) - playerStats.DEF
  );
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

  await delay(1000);

  if (monsterStats.REMAINING_HP > playerStats.ATK) {
    setPlayerStats({
      ...playerStats,
      REMAINING_HP: playerStats.REMAINING_HP - receivedDamage,
    });
  }
};
