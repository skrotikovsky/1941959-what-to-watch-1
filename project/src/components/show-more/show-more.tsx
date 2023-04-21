import {useAppDispatch} from '../../hooks';
import {filmsProcess} from '../../store/films-process/films-process';

export default function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  const clickHandler = () => {dispatch(filmsProcess.actions.addFilmsCount());};
  return (
    <div onClick={clickHandler} className="catalog__more">
      <button className="catalog__button" type="button">
      Show more
      </button>
    </div>
  );
}
