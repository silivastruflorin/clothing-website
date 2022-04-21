import { createSelector } from '@reduxjs/toolkit';

const selectCounter = state => state.counterSlice?.value;
export const counterSelector = createSelector(selectCounter,(value) =>  value);