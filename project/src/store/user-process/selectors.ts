import {State} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../consts';
import {Films} from '../../types/films';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getMyFilms = (state: State): Films => state[NameSpace.User].myList;
