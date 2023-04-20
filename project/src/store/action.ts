import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/films';
import {AppRoute, AuthorizationStatus} from '../consts';
import {Film} from '../types/film';
import {CommentData} from '../types/comment';
import {Reviews} from '../types/review';

export const changeGenre = createAction<string>('mainFilms/changeGenre');
export const loadFilmsByGenre = createAction('mainFilms/loadFilmsByGenre');
export const addFilmsCount = createAction('mainFilms/addFilmsCount');
export const resetFilmCounter = createAction('mainFilms/resetFilmCounter');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setAuthorization = createAction<AuthorizationStatus>('user/auth');
export const toggleDataLoading = createAction<boolean>('mainFilms/dataLoading');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const loadSingleFilm = createAction<Film>('data/loadDingleFilm');
export const redirectToRoute = createAction<AppRoute|string>('route/redirectToRoute');
export const sendComment = createAction<CommentData>('user/sendComment');
export const loadComments = createAction<Reviews>('data/loadComments');
