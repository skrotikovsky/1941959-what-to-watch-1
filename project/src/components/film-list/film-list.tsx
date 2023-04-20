import {Films} from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmListProps ={
  films: Films;
  countFilmsToSHow: number;
}
export default function FilmList ({films, countFilmsToSHow}:FilmListProps): JSX.Element{
  const filmsToShow = films.slice(0, films.length > countFilmsToSHow ? countFilmsToSHow : films.length);
  return (
    <>
      {filmsToShow.map((x):JSX.Element=>(
        <FilmCard film={x} key={`${x.id}${x.name}`}/>)
      )}
    </>
  );
}

