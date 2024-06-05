import { ROUTING } from '@contents/routing';
import { Link } from 'react-router-dom';

export const Game = () => {
  return (
    <div className="position-relative">
      <div className="position-absolute top-0 end-0 m-2">
        <Link to={ROUTING.HOME}>
          <button className="btn btn-danger">X</button>
        </Link>
      </div>
    </div>
  );
};
