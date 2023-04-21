import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../consts';

export default function HeadAuthorized(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div onClick={()=>navigate(AppRoute.MyList)} className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item">
        <a onClick={()=>{dispatch(logoutAction());}} className="user-block__link">Sign out</a>
      </li>
    </ul>);
}
