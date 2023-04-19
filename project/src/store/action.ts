import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/films';
import {AuthorizationStatus} from '../consts';
import {Film} from '../types/film';

export const changeGenre = createAction<string>('mainFilms/changeGenre');
export const loadFilmsByGenre = createAction('mainFilms/loadFilmsByGenre');
export const addFilmsCount = createAction('mainFilms/addFilmsCount');
export const resetFilmCounter = createAction('mainFilms/resetFilmCounter');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setAuthorization = createAction<AuthorizationStatus>('user/auth');
export const toggleDataLoading = createAction<boolean>('mainFilms/dataLoading');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const loadSingleFilm = createAction<Film>('data/loadDingleFilm');
