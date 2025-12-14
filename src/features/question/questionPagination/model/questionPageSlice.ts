import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
	selectSkill,
	setSpecialization,
	setComplexity,
	setRating,
	setSearch,
	resetFilters,
} from '@features/question/questionFilter/model/filterSlice';
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
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(
				selectSkill,
				setSpecialization,
				setComplexity,
				setRating,
				setSearch,
				resetFilters
			),
			(state) => {
				state.page = 1;
			}
		);
	},
});

export const { setPage, resetPage } = questionsPageSlice.actions;
export const questionsPageReducer = questionsPageSlice.reducer;
