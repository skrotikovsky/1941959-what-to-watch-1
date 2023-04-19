import {createReducer} from '@reduxjs/toolkit';
import {
  addFilmsCount,
  changeGenre,
  loadFilms,
  requireAuthorization,
  resetFilmCounter, toggleDataLoading
} from './action';
import {AuthorizationStatus} from '../consts';
import {Films} from '../types/films';

type InitialState = {
  genre: string;
  films: Films;
  countFilmsToShow: number;
  authorizationStatus: AuthorizationStatus;
  dataLoaded: boolean;
}
const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  countFilmsToShow: 8,
  authorizationStatus: AuthorizationStatus.Unknown,
  dataLoaded: false,
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(changeGenre, (state, {payload}) => {state.genre = payload;})
    //.addCase(loadFilmsByGenre, ((state) => {
    //  state.genre === Genre.ALL_GENRES ? state.films = films : state.films = films.filter((film)=>film.genre === state.genre);}))
    .addCase(addFilmsCount, ((state) => {state.countFilmsToShow = state.countFilmsToShow + 8;}))
    .addCase(resetFilmCounter, ((state) => {state.countFilmsToShow = 8;}))
    .addCase(loadFilms, (state, action) => {state.films = action.payload;})
    .addCase(requireAuthorization, (state, action) => {state.authorizationStatus = action.payload;})
    .addCase(toggleDataLoading, (state, action) => {state.dataLoaded = action.payload;});
}));
