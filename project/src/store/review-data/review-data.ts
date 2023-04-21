import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {ReviewsData} from '../../types/state';
import {fetchCommentsAction, sendCommentAction} from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
};

export const reviewsData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state, action) => {
        state.reviews = [];
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.reviews = [];
      });
  }
});
