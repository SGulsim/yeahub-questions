import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface QuestionsPageState {
	page: number;
}

const initialState: QuestionsPageState = {
	page: 1,
};

const questionsPageSlice = createSlice({
	name: 'questionsPage',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		resetPage: (state) => {
			state.page = 1;
		},
	},
});

export const { setPage, resetPage } = questionsPageSlice.actions;
export const questionsPageReducer = questionsPageSlice.reducer;
