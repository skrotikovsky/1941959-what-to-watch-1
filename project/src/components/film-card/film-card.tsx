import {Film} from '../../types/types';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Video} from '../video/video';

type FilmCardProps = {
  film: Film;
}

export default function FilmCard ({film}:FilmCardProps): JSX.Element{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setActive] = useState(false);
  let timerId: NodeJS.Timeout;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={()=>{
        timerId = setTimeout(()=>{
          setActive(true);
        }, 1000);}}
      onMouseOut={()=>{
        clearTimeout(timerId);
        setActive(false);
      }}
    >
      {(isActive && <Video src={film.prevVideoLink} isMuted posterIMG={film.posterImage}/>) ||
      <div className="small-film-card__image">
        <img src={film.prevImage} alt={film.name} width="280" height="175"/>
      </div>}
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>);
}
