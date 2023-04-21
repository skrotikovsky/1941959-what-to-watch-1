import {store} from '../store';
import {AuthorizationStatus, Genre} from '../consts';
import {Films} from './films';
import {Film} from './film';
import {Reviews} from './review';
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmsData = {
  films: Films;
  dataLoaded: boolean;
  promoFilm: Film;
  film: Film;
  similarFilms: Films;
};

export type FilmsProcess = {
  countFilmsToShow: number;
  genreFilter: Genre;
}
export type ReviewsData = {
  reviews: Reviews;
};
