import ReviewForm from '../../components/review-form/review-form';
import LogoWTW from '../../components/logo-wtw/logo-wtw';
import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchSingleFilm} from '../../store/api-actions';
import {useParams} from 'react-router-dom';

function AddReview() {
  const film = useAppSelector((state) => state.film);
  const idFilm = Number(useParams().id);
  useEffect(()=> {
    store.dispatch(fetchSingleFilm(idFilm));
  });
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <LogoWTW isLight/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm/>
      </div>
    </section>
  );
}

export default AddReview;
