import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps ={
  films: Film[];
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

