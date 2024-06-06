import { MonsterType } from './monster.types';

export interface AxiosTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: MonsterType[];
}
