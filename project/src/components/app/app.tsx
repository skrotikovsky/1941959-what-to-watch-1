import MainPageComponent from '../../pages/main-page/main-page component';
//import MoviePageComponent from '../../pages/movie-page/movie-page component';

const FilmData = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: '2014'
};

function App(): JSX.Element {
  return (<MainPageComponent filmName = {FilmData.FILM_TITLE} filmGenre = {FilmData.FILM_GENRE} filmRealeseDate = {FilmData.FILM_YEAR} />);
}

export default App;
