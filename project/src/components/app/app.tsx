import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import Page404 from '../../pages/404page/404page';
import PrivateRoute from '../private-route/private-route';
import React from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MyList from '../../pages/my-list/my-list';
import {Film} from '../../types/types';
import AddReview from '../../pages/add-review/add-review';

const FilmData = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: '2014',
};
type AppScreenProps = {
  films: Film[];
}

function App(films:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage filmName = {FilmData.FILM_TITLE} filmGenre = {FilmData.FILM_GENRE} filmReleaseDate = {FilmData.FILM_YEAR} films={films.films} />}/>
          {/*<Route path={'test'} element={<MovieReviews />}/>*/}
          <Route path={AppRoute.SignIn} element={<SignIn/>}/>
          <Route path={AppRoute.MyList} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><MyList myFilms={films.films}/></PrivateRoute>}/>
          <Route path={AppRoute.Film} element={<MoviePage films={films.films}/>}/>
          {/*<Route path={AppRoute.Review} element={<MovieReviews films={films.films} />}/>/*/}
          <Route path={AppRoute.AddReview} element={<AddReview/>}/>
          {/*<Route path={AppRoute.FilmDetails} element={<MovieDetails films={films.films}/>}/>*/}
          <Route path={AppRoute.Player} element={<Player/>}/>
        </Route>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>);
  /*<MainPage filmName = {FilmData.FILM_TITLE} filmGenre = {FilmData.FILM_GENRE} filmRealeseDate = {FilmData.FILM_YEAR} />*/
}

export default App;
