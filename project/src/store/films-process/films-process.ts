import {createSlice} from '@reduxjs/toolkit';
import {Genre, NameSpace} from '../../consts';
import {FilmsProcess} from '../../types/state';

const initialState: FilmsProcess = {
  countFilmsToShow: 8,
  genreFilter: Genre.ALL_GENRES,
};


export const filmsProcess = createSlice({
  name: NameSpace.FilmsProcess,
  initialState,
  reducers: {
    addFilmsCount: (state) => {
      state.countFilmsToShow += 8;
    },
    resetFilmCounter: (state) => {
      state.countFilmsToShow = 8;},
    setGenre: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.genreFilter = action.payload;},
  },
});

export const {addFilmsCount, resetFilmCounter, setGenre} = filmsProcess.actions;
