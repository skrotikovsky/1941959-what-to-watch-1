import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {filmsData} from './films-data/films-data';
import {userProcess} from './user-process/user-process';
import {reviewsData} from './review-data/review-data';
import {filmsProcess} from './films-process/films-process';

export const rootReducer = combineReducers({
  [NameSpace.FilmsProcess]: filmsProcess.reducer,
  [NameSpace.Review]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.FilmsData]: filmsData.reducer,
});
