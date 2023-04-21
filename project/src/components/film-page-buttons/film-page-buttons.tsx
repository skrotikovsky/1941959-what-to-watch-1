import {AppRoute, AuthorizationStatus} from '../../consts';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus, getMyFilms} from '../../store/user-process/selectors';
import {useEffect, useState} from 'react';
import {fetchMyFilms, removeFavoriteFilm, setFavoriteFilm} from '../../store/api-actions';

type FilmPageButtonsProp = {
  idFilm: number;
}
export default function FilmPageButtons({idFilm}: FilmPageButtonsProp): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const myList = useAppSelector(getMyFilms);
  const film = myList.find((filmData)=>filmData.id === idFilm);
  const [inMyList, setInMyList] = useState<boolean>(true);

  useEffect(() => {
    typeof film === 'undefined' ? setInMyList(false) : setInMyList(true);
    dispatch(fetchMyFilms());
  },[idFilm]);

  const setFilmMyList = () => {
    dispatch(setFavoriteFilm(idFilm));
    dispatch(fetchMyFilms());
    setInMyList(true);
  };
  const removeFilmMyList = () => {
    dispatch(removeFavoriteFilm(idFilm));
    dispatch(fetchMyFilms());
    setInMyList(false);
  };

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={()=> navigate(`/player/${idFilm}`)}>
        <svg viewBox="0 0 19 19" width={19} height={19}>
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={()=>{
          if(authStatus === AuthorizationStatus.Auth) {
            inMyList ? removeFilmMyList() : setFilmMyList();
          } else {navigate(AppRoute.SignIn);}
        }}
      >
        {inMyList ?
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#in-list" />
          </svg>
          :
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>}
        <span>My list</span>
        <span className="film-card__count">{authStatus === AuthorizationStatus.Auth ? myList.length : 0}</span>
      </button>
      {(authStatus === AuthorizationStatus.Auth) && <a href={`/films/${idFilm}/addreview`} className="btn film-card__button">Add review</a>}
    </div>
  );
}

