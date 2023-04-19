import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import Page404 from '../../pages/404page/404page';
import PrivateRoute from '../private-route/private-route';
import React from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import {AppRoute} from '../../consts';
import MyList from '../../pages/my-list/my-list';
import AddReview from '../../pages/add-review/add-review';
import {useAppSelector} from '../../hooks';
import HeadGuest from '../head-guest/head-guest';

const FilmData = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: '2014',
};

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage filmName = {FilmData.FILM_TITLE} filmGenre = {FilmData.FILM_GENRE} filmReleaseDate = {FilmData.FILM_YEAR}/>}/>
          <Route path={AppRoute.SignIn} element={<SignIn/>}/>
          <Route path={'/test'} element={<HeadGuest/>}/>
          <Route path={AppRoute.MyList} element={<PrivateRoute authorizationStatus={authorizationStatus}><MyList/></PrivateRoute>}/>
          <Route path={AppRoute.Film} element={<MoviePage/>}/>
          <Route path={AppRoute.AddReview} element={<AddReview/>}/>
          <Route path={AppRoute.Player} element={<Player/>}/>
        </Route>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
