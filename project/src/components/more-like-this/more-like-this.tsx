import {Film} from '../../types/types';
import FilmList from '../film-list/film-list';

type FilmGenre = {
  film: Film;
  films: Film[];
}

export default function MoreLikeThis({film, films}: FilmGenre): JSX.Element {
  let genreArr = films.filter((value) => value.genre === film.genre && value !== film);
  const withoutGenreArr = films.filter((value) => value.genre !== film.genre);
  genreArr = genreArr.concat(withoutGenreArr).slice(0,4);

  return (
    <div className="catalog__films-list">
      <FilmList films={genreArr}/>
    </div>);
}
