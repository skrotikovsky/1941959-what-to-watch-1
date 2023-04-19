import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Films} from '../types/films';
import {loadFilms, toggleDataLoading} from './action';
import {APIRoute} from '../consts';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (_arg,{dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.getFilms);
    dispatch(toggleDataLoading(true));
    dispatch(loadFilms(data));
    dispatch(toggleDataLoading(false));
  }
);
