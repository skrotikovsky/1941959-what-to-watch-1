import {Film} from '../../types/types';
import Page404 from '../404page/404page';
import {Link, useParams} from 'react-router-dom';
import {ActiveTab} from '../../consts';
import LogoWTW from '../../components/logo-wtw/logo-wtw';
import FilmTabs from '../../components/film-tabs/film-tabs';
import FilmPageButtons from '../../components/film-page-buttons/film-page-buttons';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import {useState} from 'react';

type MoviePageType = {
  films: Film[];
}

function MoviePage({films}:MoviePageType): JSX.Element {
  const idFilm = useParams();
  const [openedTab, setActiveTab] = useState(ActiveTab.OVERVIEW);
  const film = films[Number(idFilm.id) - 1];
  if (film === undefined){
    return <Page404/>;
  }
  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <LogoWTW isLight={false}/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.dateOfRelease}</span>
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
              <FilmTabs film={film} isActive={openedTab}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreLikeThis films={films} film={film}/>
        </section>

        <footer className="page-footer">
          <LogoWTW isLight/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>);
}
export default MoviePage;
