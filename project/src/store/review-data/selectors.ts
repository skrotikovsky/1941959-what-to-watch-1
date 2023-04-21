import {State} from '../../types/state';
import {NameSpace} from '../../consts';
import {Reviews} from '../../types/review';

export const getReviews = (state: State): Reviews => state[NameSpace.Review].reviews;
