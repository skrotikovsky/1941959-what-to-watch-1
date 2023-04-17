import {films} from '../mock/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilmsByGenre} from './action';
import {Genres} from '../consts';


const initialState = {
  genre: 'All genres',
  films: films,
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(changeGenre, (state, {payload}) => {state.genre = payload;})
    .addCase(loadFilmsByGenre, ((state) => {
      state.genre === Genres.ALL_GENRES ? state.films = films : state.films = films.filter((film)=>film.genre === state.genre);}));
}));
