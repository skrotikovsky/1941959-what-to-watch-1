//import AddReview from '../../pages/add-review/add-review';
//import HeadGuest from '../../pages/head-guest/head-guest';
import MainPage from '../../pages/main-page/main-page';
//import MovieDetails from '../../pages/movie-details/movie-details';
//import MovieInMyList from '../../pages/movie-in-list/movie-in-list';
import MoviePage from '../../pages/movie-page/movie-page';
import MovieReviews from '../../pages/movie-reviews/movie-reviews';
import Player from '../../pages/player/player';
//import PlayerPause from '../../pages/player-pause/player-pause';
import SignIn from '../../pages/sign-in/sign-in';
////import SignInErr from '../../pages/sign-in-err/sign-in-err';
//import SignInMess from '../../pages/sign-in-mess/sign-in-mess';
import Page404 from '../../pages/404page/404page';
import PrivateRoute from '../private-route/private-route';
import React from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MyList from '../../pages/my-list/my-list';

const FilmData = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: '2014'
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage filmName = {FilmData.FILM_TITLE} filmGenre = {FilmData.FILM_GENRE} filmRealeseDate = {FilmData.FILM_YEAR} />}/>
          <Route path={AppRoute.SignIn} element={<SignIn/>}/>
          <Route path={AppRoute.MyList} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyList/></PrivateRoute>}/>
          <Route path={AppRoute.Film} element={<MoviePage/>}>
            <Route path={AppRoute.Review} element={<MovieReviews/>}/>
          </Route>
          <Route path={AppRoute.Player} element={<Player/>}/>
        </Route>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>);
  /*<MainPage filmName = {FilmData.FILM_TITLE} filmGenre = {FilmData.FILM_GENRE} filmRealeseDate = {FilmData.FILM_YEAR} />*/
}

export default App;
