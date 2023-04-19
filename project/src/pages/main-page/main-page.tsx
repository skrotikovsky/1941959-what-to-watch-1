import {useNavigate} from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import {AppRoute, AuthorizationStatus} from '../../consts';
import GenreFilter from '../../components/genre-filter/genre-filter';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {loadFilmsByGenre} from '../../store/action';
import ShowMore from '../../components/show-more/show-more';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import HeadGuest from '../../components/head-guest/head-guest';
import HeadAuthorized from '../../components/head-authorized/head-authorized';

type MainPageProps = {
  filmName: string;
  filmGenre: string;
  filmReleaseDate: string;
}

function MainPage({filmName,filmGenre,filmReleaseDate}:MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loadingData = useAppSelector((state) => state.dataLoaded);
  const genre = useAppSelector((state) => state.genre);
  const countOfFilms = useAppSelector((state) => state.countFilmsToShow);
  const filmsByGenre = useAppSelector((state) => state.films);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const promoFilm = useAppSelector((state) => state.promoFilm);

  useEffect(()=>{
    dispatch(loadFilmsByGenre());
  },[genre]);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilm.backgroundImage}
            alt={promoFilm.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          {authorizationStatus === AuthorizationStatus.Unknown || authorizationStatus === AuthorizationStatus.NoAuth
            ? <HeadGuest/>
            : <HeadAuthorized/>}
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm.posterImage}
                alt={`${promoFilm.name} poster`}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>
              <div className="film-card__buttons">
                <button onClick={()=>navigate(AppRoute.Player)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={()=>navigate(AppRoute.MyList)} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My List</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreFilter/>
          {loadingData && <LoadingScreen/>}
          <div className="catalog__films-list">
            <FilmList films={filmsByGenre} countFilmsToSHow={countOfFilms}/>
          </div>
          {(filmsByGenre.length > countOfFilms) && <ShowMore/>}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
