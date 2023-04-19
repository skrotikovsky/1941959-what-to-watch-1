import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

export default function HeadAuthorized(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
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
