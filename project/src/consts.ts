export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Player = '/player',
  AddReview = '/films/:id/addreview',
  Page404 = '/*',
}

export function RatingLevel(rating: number): string{
  if (rating >= 9) {
    return 'Very good';
  }
  if (rating >= 7) {
    return 'Good';
  }
  if (rating >= 5) {
    return 'Ok';
  }
  return 'Bad';
}

export enum ActiveTab {
  OVERVIEW= 'overview',
  DETAILS = 'details',
  REVIEWS = 'reviews'
}

export enum Genre {
  ALL_GENRES = 'All Genres',
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMA = 'Drama',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-fi',
  THRILLER = 'Thriller',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Comments = '/comments'
}

export enum NameSpace {
  FilmsData = 'FILMSDATA',
  FilmsProcess = 'FILMSPROCESS',
  User = 'USER',
  Review = 'REVIEW',
}
