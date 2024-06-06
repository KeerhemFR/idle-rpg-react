import axios, { AxiosResponse } from 'axios';
import { AxiosTypes } from '@interfaces/axios.types';

export const getMonster = async (setMonsterStats, multiplicator) => {
  const apiPage = Math.round(Math.random() * 57);
  await axios
    .get(`${import.meta.env.IDLERPG_API}?page=${apiPage}`)
    .then(({ data }: AxiosResponse<AxiosTypes>) => {
      const randomNumber = Math.round(Math.random() * 50);
      const monster = data.results[randomNumber];
      setMonsterStats({
        ATK: Math.round(
          (monster.strength + monster.dexterity + monster.intelligence) *
            10 *
            multiplicator
        ),
        HP: Math.round(
          (monster.constitution + monster.wisdom + monster.charisma) *
            10 *
            multiplicator
        ),
        REMAINING_HP: Math.round(
          (monster.constitution + monster.wisdom + monster.charisma) *
            10 *
            multiplicator
        ),
        EXP: Math.round(
          monster.strength +
            monster.dexterity +
            monster.intelligence +
            monster.constitution +
            monster.wisdom +
            monster.charisma
        ),
        NAME: monster.name,
      });
    })
    .catch((error: unknown) => {
      console.error(error);
    });
};
