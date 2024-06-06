//React import
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Component import
import { Monster } from '@components/Monster';
import { Player } from '@components/Player';
//Context import
import { GameContext } from '@store/GameContext';
//Content import
import { ROUTING } from '@contents/routing';
//Utils importt
import { getMonster } from '@utils/getMonster';
//Types import
import { GameContextType } from '@interfaces/gamecontext.types';

export const Game = () => {
  const context = useContext<GameContextType | null>(GameContext);
  const { monsterStats, setMonsterStats, multiplicator, turn } = context;

  /**
   * Trigger the getMonster function when the monsterStats in context is null
   */
  useEffect(() => {
    if (!monsterStats) {
      getMonster(setMonsterStats, multiplicator);
    }
  }, [turn, monsterStats]);

  return (
    <div className="position-relative d-flex flex-column justify-content-around align-items-center h-100">
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
