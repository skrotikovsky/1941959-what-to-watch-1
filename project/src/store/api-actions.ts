import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Films} from '../types/films';
import {loadFilms, loadPromoFilm, loadSingleFilm, setAuthorization, toggleDataLoading} from './action';
import {APIRoute} from '../consts';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {AuthorizationStatus} from '../consts';
import {removeToken, setToken} from '../services/token';
import {Film} from '../types/film';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (_arg,{dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(toggleDataLoading(true));
    dispatch(loadFilms(data));
    dispatch(toggleDataLoading(false));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/auth',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(setAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(setAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg,{dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  }
);

export const fetchSingleFilm = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(loadSingleFilm(data));

  },
);
