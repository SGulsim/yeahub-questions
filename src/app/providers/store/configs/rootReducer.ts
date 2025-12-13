import { questionFilterReducer } from '@features/question/questionFilter/model/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	questionFilters: questionFilterReducer,
});
