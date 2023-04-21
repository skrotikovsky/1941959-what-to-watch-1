import {Films} from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmGenre = {
  films: Films;
}

export default function MoreLikeThis({films}: FilmGenre): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((x):JSX.Element=>(
        <FilmCard film={x} key={`similar${x.id}${x.name}`}/>)
      )}
    </div>);
}
