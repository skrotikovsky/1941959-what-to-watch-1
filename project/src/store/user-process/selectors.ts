import {State} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../consts';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
