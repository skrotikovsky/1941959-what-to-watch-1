import {State} from '../../types/state';
import {Genre, NameSpace} from '../../consts';
import {Films} from '../../types/films';

export const getCountFilmsToShow = (state: State): number => state[NameSpace.FilmsProcess].countFilmsToShow;
export const getGenre = (state: State): Genre => state[NameSpace.FilmsProcess].genreFilter;
export const getFilmsByGenre = (state: State): Films => {
  const films = state[NameSpace.FilmsData].films;
  const genre = state[NameSpace.FilmsProcess].genreFilter;
  const genreFilms = films.filter((film) => film.genre === genre);
  return (genre === Genre.ALL_GENRES ? films : genreFilms);
};
