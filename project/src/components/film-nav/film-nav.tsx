import {ActiveSection} from '../../consts';
import {Link} from 'react-router-dom';

type FilmNavProp = {
  isActive: string;
  filmID: string;
}
export default function FilmNav({isActive, filmID}: FilmNavProp): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${isActive === ActiveSection.OVERVIEW ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${filmID}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${isActive === ActiveSection.DETAILS ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${filmID}/details`} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${isActive === ActiveSection.REVIEWS ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${filmID}/review`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>);
}
