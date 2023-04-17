import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('mainFilms/changeGenre');
export const loadFilmsByGenre = createAction('mainFilms/loadFilmsByGenre');
export const addFilmsCount = createAction('mainFilms/addFilmsCount');
export const resetFilmCounter = createAction('mainFilms/resetFilmCounter');
