import { Monster } from '@components/Monster';
import { Player } from '@components/Player';
import { ROUTING } from '@contents/routing';
import { GameContext } from '@store/GameContext';
import { Link } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { GameContextType } from '@interfaces/gamecontext.types';
import { getMonster } from '@utils/getMonster';

export const Game = () => {
  const context = useContext<GameContextType | null>(GameContext);
  const { monsterStats, setMonsterStats, multiplicator, turn } = context;

  useEffect(() => {
    if (!monsterStats) {
      getMonster(setMonsterStats, multiplicator);
    }
  }, [turn, monsterStats]);

  return (
    <div className="position-relative d-flex justify-content-center align-items-center h-100">
      <div className="position-absolute top-0 end-0 m-2">
        <Link to={ROUTING.HOME}>
          <button className="btn btn-danger">X</button>
        </Link>
      </div>
      {monsterStats && <Monster />}
      <Player />
    </div>
  );
};
