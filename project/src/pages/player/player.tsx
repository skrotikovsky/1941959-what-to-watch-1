import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect, useRef, useState} from 'react';
import {fetchSingleFilmAction} from '../../store/api-actions';
import {getSingleFilm} from '../../store/films-data/selectors';
import moment from 'moment';

function Player(): JSX.Element {
  const navigate = useNavigate();
  const filmId = Number(useParams().id);
  const dispatch = useAppDispatch();
  const film = useAppSelector(getSingleFilm);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }
    if (isPlaying) {
      playerRef.current.play();
    }
    if (!isPlaying) {
      playerRef.current.pause();
    }
  }, [isPlaying]);
  useEffect(()=>{
    dispatch(fetchSingleFilmAction(filmId));
  }, [filmId]);
  return (
    <div className="player">
      <video className="player__video" width="100%" height="100%" poster={film.backgroundImage} ref={playerRef} src={film.videoLink}/>
      <button type="button" className="player__exit" onClick={()=>{navigate(`/films/${filmId}`);}}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{moment(0, 'h').minute(film.runTime).format(film.runTime > 60 ? 'hh:mm:ss' : 'mm:ss')}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={()=>{setIsPlaying(!isPlaying);}}>
            {isPlaying ?
              <>
                <svg viewBox="0 0 14 21" width={14} height={21}>
                  <use xlinkHref="#pause" />
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </>}
          </button>
          <div className="player__name">{film.name}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
