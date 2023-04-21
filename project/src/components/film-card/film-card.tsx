import {Film} from '../../types/film';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Video} from '../video/video';

type FilmCardProps = {
  film: Film;
}

export default function FilmCard ({film}:FilmCardProps): JSX.Element{
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
      {(isActive && <Video src={film.previewVideoLink} isMuted />) ||
      <>
        <div className="small-film-card__image">
          <img src={film.previewImage} alt={film.name} width="280" height="175"/>
        </div>
        <h3 className="small-film-card__title">
          <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
        </h3>
      </>}
    </article>);
}
