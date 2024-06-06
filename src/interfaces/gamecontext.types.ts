import React from 'react';

export interface GameContextType {
  turn: number;
  setTurn: React.Dispatch<React.SetStateAction<number>>;
  multiplicator: number;
  setMultiplicator: React.Dispatch<React.SetStateAction<number>>;
  monsterStats: MonsterStats | null;
  setMonsterStats: React.Dispatch<React.SetStateAction<MonsterStats | null>>;
  playerStats: PlayerStats | null;
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerStats | null>>;
}

export interface MonsterStats {
  ATK: number;
  HP: number;
  REMAINING_HP: number;
  EXP: number;
  NAME: string;
}

export interface PlayerStats {
  LVL: number;
  ATK: number;
  DEF: number;
  HP: number;
  REMAINING_HP: number;
  CRIT: number;
  EXP: number;
  NEXT_LVL: number;
}
