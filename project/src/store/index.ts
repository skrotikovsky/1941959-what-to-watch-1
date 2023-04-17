import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
// eslint-disable-next-line
export const store = configureStore({reducer});
