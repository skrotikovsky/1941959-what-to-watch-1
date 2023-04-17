import {films} from '../mock/films';
import {createReducer} from '@reduxjs/toolkit';
import {addFilmsCount, changeGenre, loadFilmsByGenre, resetFilmCounter} from './action';
import {Genre} from '../consts';


const initialState = {
  genre: 'All genres',
  films: films,
  countFilmsToShow: 8,
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(changeGenre, (state, {payload}) => {state.genre = payload;})
    .addCase(loadFilmsByGenre, ((state) => {
      state.genre === Genre.ALL_GENRES ? state.films = films : state.films = films.filter((film)=>film.genre === state.genre);}))
    .addCase(addFilmsCount, ((state) => {state.countFilmsToShow = state.countFilmsToShow + 8;}))
    .addCase(resetFilmCounter, ((state) => {state.countFilmsToShow = 8;}));
}));
