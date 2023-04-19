import {AppRoute} from '../../consts';
import {useNavigate} from 'react-router-dom';

type FilmButtonsProps = {
  filmID: number;
}
export default function FilmPageButtons({filmID}: FilmButtonsProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="film-card__buttons">
      <button onClick={()=>navigate(`${AppRoute.Player}`)} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button onClick={()=>navigate(`${AppRoute.MyList}`)} className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
      <a href={`/films/${filmID}/addreview`} className="btn film-card__button">Add review</a>
    </div>
  );
}
