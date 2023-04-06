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
  Review = '/films/:id/review',
  Player = '/player',
  AddReview = '/films/:id/addreview',
  FilmDetails = '/films/:id/details',
}

export function RatingLevel(rating: string): string{
  const rate = Number(rating);
  if (rate >= 9) {
    return 'Very good';
  }
  if (rate >= 7) {
    return 'Good';
  }
  if (rate >= 5) {
    return 'Ok';
  }
  return 'Bad';
}

export enum ActiveSection {
  OVERVIEW= 'overview',
  DETAILS = 'details',
  REVIEWS = 'reviews'
}
