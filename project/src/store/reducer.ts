import {createReducer} from '@reduxjs/toolkit';
import {
  addFilmsCount,
  changeGenre,
  loadFilms, loadPromoFilm, loadSingleFilm,
  setAuthorization,
  resetFilmCounter, toggleDataLoading, loadComments
} from './action';
import {AuthorizationStatus} from '../consts';
import {Films} from '../types/films';
import {Film} from '../types/film';
import {Reviews} from '../types/review';

type InitialState = {
  genre: string;
  films: Films;
  countFilmsToShow: number;
  authorizationStatus: AuthorizationStatus;
  dataLoaded: boolean;
  promoFilm: Film;
  film: Film;
  reviews: Reviews;
}
const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  countFilmsToShow: 8,
  authorizationStatus: AuthorizationStatus.Unknown,
  dataLoaded: false,
  promoFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  film: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  reviews: [],

};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(changeGenre, (state, {payload}) => {state.genre = payload;})
    //.addCase(loadFilmsByGenre, ((state) => {
    //  state.genre === Genre.ALL_GENRES ? state.films = films : state.films = films.filter((film)=>film.genre === state.genre);}))
    .addCase(addFilmsCount, ((state) => {state.countFilmsToShow += 8;}))
    .addCase(resetFilmCounter, ((state) => {state.countFilmsToShow = 8;}))
    .addCase(loadFilms, (state, action) => {state.films = action.payload;})
    .addCase(setAuthorization, (state, action) => {state.authorizationStatus = action.payload;})
    .addCase(toggleDataLoading, (state, action) => {state.dataLoaded = action.payload;})
    .addCase(loadPromoFilm, (state, action) => {state.promoFilm = action.payload;})
    .addCase(loadSingleFilm, (state, action) => {state.film = action.payload;})
    .addCase(loadComments, (state, action) => {state.reviews = action.payload; });
}));
