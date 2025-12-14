import { questionFilterReducer } from '@features/question/questionFilter/model/filterSlice';
import { questionsPageReducer } from '@features/question/questionPagination/model/questionPageSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	questionFilters: questionFilterReducer,
	questionsPage: questionsPageReducer,
});
