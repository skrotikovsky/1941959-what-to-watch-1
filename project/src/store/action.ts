import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/films';
import {AuthorizationStatus} from '../consts';

export const changeGenre = createAction<string>('mainFilms/changeGenre');
export const loadFilmsByGenre = createAction('mainFilms/loadFilmsByGenre');
export const addFilmsCount = createAction('mainFilms/addFilmsCount');
export const resetFilmCounter = createAction('mainFilms/resetFilmCounter');
export const loadFilms = createAction<Films>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/auth');
export const toggleDataLoading = createAction<boolean>('mainFilms/dataLoading');
