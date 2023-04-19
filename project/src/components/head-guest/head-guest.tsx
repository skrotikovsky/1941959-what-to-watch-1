import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

function HeadGuest() {
  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default HeadGuest;
