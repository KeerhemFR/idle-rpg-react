//Axios import
import axios, { AxiosResponse } from 'axios';
//Types import
import { AxiosTypes } from '@interfaces/axios.types';

/**
 * Get the monster via an API call and calculate the stats that will be use in the game
 * Once the stats made, they will be saved in the context
 *
 * @param {React.Dispatch} setMonsterStats setState to attribute the stats to monsterStats
 * @param {number} multiplicator multiplicator saved in the context, used to calculate the stats
 */
export const getMonster = async (setMonsterStats, multiplicator) => {
  //Randomly pick a page in the API, since the volume of data is big
  const apiPage = Math.round(Math.random() * 56) ?? 1;
  //Make the API call in the wanted page
  await axios
    .get(`${import.meta.env.IDLERPG_API}?page=${apiPage}`)
    //Will get one of the monsters in the page
    //Then will calculate the stats based on received data to store them in the context
    .then(({ data }: AxiosResponse<AxiosTypes>) => {
      const randomNumber = Math.round(Math.random() * 50);
      const monster = data.results[randomNumber];
      setMonsterStats({
        ATK: Math.round(
          (monster.strength + monster.dexterity + monster.intelligence) *
            5 *
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
          ((monster.strength +
            monster.dexterity +
            monster.intelligence +
            monster.constitution +
            monster.wisdom +
            monster.charisma) /
            2) *
            multiplicator
        ),
        NAME: monster.name,
      });
    })
    .catch((error: unknown) => {
      console.error(error);
    });
};
