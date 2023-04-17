import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('mainFilms/changeGenre');
export const loadFilmsByGenre = createAction('mainFilms/loadFilmsByGenre');
