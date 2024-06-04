import { Link } from 'react-router-dom';
import { ROUTING } from '@contents/routing';

export const Homepage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <div className="d-flex flex-column">
        <Link to={ROUTING.GAME}>
          <button className="btn btn-success m-1">Commencer</button>
        </Link>
        <button className="btn btn-primary m-1">Continuer</button>
      </div>
    </div>
  );
};
