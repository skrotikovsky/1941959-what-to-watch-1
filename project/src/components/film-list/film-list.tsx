import {Film} from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmListProps ={
  films: Film[];
}
export default function FilmList ({films}:FilmListProps): JSX.Element{
  return (
    <>
      {films.map((x):JSX.Element=>(
        <FilmCard film={x} key={`${x.id}${x.name}`}/>)
      )}
    </>
  );
}
/*
<article className="small-film-card catalog__films-card">
  <div className="small-film-card__image">
    <img src={film.prevImage} alt={film.name} width="280" height="175"/>
  </div>
  <h3 className="small-film-card__title">
    <a className="small-film-card__link" href="film-page.html">{film.name}</a>
  </h3>
</article>*/
