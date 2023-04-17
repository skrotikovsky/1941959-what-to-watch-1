import {useAppDispatch} from '../../hooks';
import {addFilmsCount} from '../../store/action';

export default function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button onClick={()=>{dispatch(addFilmsCount());}} className="catalog__button" type="button">
      Show more
      </button>
    </div>
  );
}
