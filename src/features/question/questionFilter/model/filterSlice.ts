import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { QuestionFilterState } from './types';

const initialState: QuestionFilterState = {
	showAllSkills: false,
	showAllSpecializations: false,
	specializations: [],
	skills: [],
	rating: [],
	complexity: [],
};

const questionFilterSlice = createSlice({
	name: 'questionFilters',
	initialState,
	reducers: {
		toggleSkill(state, action: PayloadAction<number>) {
			const id = action.payload;

			state.skills = state.skills.includes(id)
				? state.skills.filter((skillId) => skillId !== id)
				: [...state.skills, id];
		},

		toggleShowAllSkills(state) {
			state.showAllSkills = !state.showAllSkills;
		},

		toggleSpecialization(state, action: PayloadAction<number>) {
			const id = action.payload;

			state.specializations = state.specializations.includes(id)
				? state.specializations.filter(
						(specializationId) => specializationId !== id
				  )
				: [...state.specializations, id];
		},

		toggleShowAllSpecializations(state) {
			state.showAllSpecializations = !state.showAllSpecializations;
		},

		resetFilters() {
			return initialState;
		},
	},
});

export const {
	toggleSkill,
	toggleSpecialization,
	toggleShowAllSkills,
	toggleShowAllSpecializations,
	resetFilters,
} = questionFilterSlice.actions;

export const questionFilterReducer = questionFilterSlice.reducer;
