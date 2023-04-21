import FilmList from '../../components/film-list/film-list';
import LogoWTW from '../../components/logo-wtw/logo-wtw';
import {useAppSelector} from '../../hooks';
import HeadAuthorized from '../../components/head-authorized/head-authorized';
import {AuthorizationStatus} from '../../consts';
import HeadGuest from '../../components/head-guest/head-guest';
import {getAuthStatus} from '../../store/user-process/selectors';
import {getFilms} from '../../store/films-data/selectors';

function MyList(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const myFilms = useAppSelector(getFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoWTW isLight/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        {authorizationStatus === AuthorizationStatus.Unknown || authorizationStatus === AuthorizationStatus.NoAuth
          ? <HeadGuest/>
          : <HeadAuthorized/>}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={myFilms} countFilmsToSHow={myFilms.length}/>
        </div>
      </section>

      <footer className="page-footer">
        <LogoWTW isLight={false}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default MyList;
