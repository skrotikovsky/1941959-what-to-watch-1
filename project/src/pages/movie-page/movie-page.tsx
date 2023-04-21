import {Link, useParams} from 'react-router-dom';
import {ActiveTab, AuthorizationStatus} from '../../consts';
import LogoWTW from '../../components/logo-wtw/logo-wtw';
import FilmTabs from '../../components/film-tabs/film-tabs';
import FilmPageButtons from '../../components/film-page-buttons/film-page-buttons';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import {useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {fetchCommentsAction, fetchSimilarFilms, fetchSingleFilmAction} from '../../store/api-actions';
import HeadGuest from '../../components/head-guest/head-guest';
import HeadAuthorized from '../../components/head-authorized/head-authorized';
import {getAuthStatus} from '../../store/user-process/selectors';
import {getReviews} from '../../store/review-data/selectors';
import {getSimilarFilms, getSingleFilm} from '../../store/films-data/selectors';

function MoviePage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const reviews = useAppSelector(getReviews);
  const similarFilms = useAppSelector(getSimilarFilms);
  const idFilm = Number(useParams().id);
  const film = useAppSelector(getSingleFilm);
  const [openedTab, setActiveTab] = useState(ActiveTab.OVERVIEW);
  useEffect(() => {
    store.dispatch(fetchSingleFilmAction(idFilm));
    store.dispatch(fetchCommentsAction(idFilm));
    store.dispatch(fetchSimilarFilms(idFilm));
  }, [idFilm]);
  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <LogoWTW isLight/>

            {authorizationStatus === AuthorizationStatus.Unknown || authorizationStatus === AuthorizationStatus.NoAuth
              ? <HeadGuest/>
              : <HeadAuthorized/>}
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <FilmPageButtons filmID={film.id}/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li onClick={()=> setActiveTab(ActiveTab.OVERVIEW)} className={`film-nav__item ${openedTab === ActiveTab.OVERVIEW ? 'film-nav__item--active' : ''}`}>
                    <Link className="film-nav__link" to={`/films/${film.id}`}>Overview</Link>
                  </li>
                  <li onClick={()=> setActiveTab(ActiveTab.DETAILS)} className={`film-nav__item ${openedTab === ActiveTab.DETAILS ? 'film-nav__item--active' : ''}`}>
                    <Link className="film-nav__link" to={`/films/${film.id}`}>Details</Link>
                  </li>
                  <li onClick={()=> setActiveTab(ActiveTab.REVIEWS)} className={`film-nav__item ${openedTab === ActiveTab.REVIEWS ? 'film-nav__item--active' : ''}`}>
                    <Link className="film-nav__link" to={`/films/${film.id}`}>Reviews</Link>
                  </li>
                </ul>
              </nav>
              <FilmTabs film={film} isActive={openedTab} reviews={reviews}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreLikeThis films={similarFilms}/>
        </section>

        <footer className="page-footer">
          <LogoWTW isLight={false}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>);
}
export default MoviePage;
