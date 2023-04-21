import {State} from '../../types/state';
import {Films} from '../../types/films';
import {NameSpace} from '../../consts';
import {Film} from '../../types/film';


export const getFilms = (state: State): Films => state[NameSpace.FilmsData].films;
export const getSimilarFilms = (state: State): Films => state[NameSpace.FilmsData].similarFilms;
export const getSingleFilm = (state: State): Film => state[NameSpace.FilmsData].film;
export const getPromoFilm = (state: State): Film => state[NameSpace.FilmsData].promoFilm;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.FilmsData].dataLoaded;

