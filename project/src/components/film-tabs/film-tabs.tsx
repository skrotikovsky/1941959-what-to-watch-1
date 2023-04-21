import {ActiveTab, RatingLevel} from '../../consts';
import {Film} from '../../types/film';
import ReviewList from '../review-list/review-list';
import {Reviews} from '../../types/review';

type FilmNavProp = {
  isActive: string;
  film: Film;
  reviews: Reviews;
}
export default function FilmTabs({isActive, film, reviews}: FilmNavProp): JSX.Element {
  const rightColumn: Reviews = [];
  const leftColumn: Reviews = [];
  reviews.map((x, index) => {index % 2 === 0 ? leftColumn.push(x) : rightColumn.push(x);});
  return (
    <>
      {isActive === ActiveTab.REVIEWS &&
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            <ReviewList reviews={leftColumn} key={'leftColumn'}/>
          </div>
          <div className="film-card__reviews-col">
            <ReviewList reviews={rightColumn} key={'rightColumn'}/>
          </div>
        </div>}
      {isActive === ActiveTab.DETAILS &&
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{film.director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {film.starring.map((x, index)=><>{x}{index === film.starring.length - 1 ? '' : ','}<br/></>)}
              </span>
            </p>
          </div>
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{film.runTime}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{film.genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{film.released}</span>
            </p>
          </div>
        </div>}
      {isActive === ActiveTab.OVERVIEW &&
        <>
          <div className="film-rating">
            <div className="film-rating__score">{film.rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{RatingLevel(film.rating)}</span>
              <span className="film-rating__count">{film.scoresCount} ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            <p>{film.description}
            </p>
            <p className="film-card__director"><strong>Director: {film.director}</strong></p>
            <p className="film-card__starring">
              <strong>Starring: {`${film.starring.join(', ')} and other`}
              </strong>
            </p>
          </div>
        </>}
    </>);
}

