import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { QuestionFilterState } from './types';
import type { Skill } from '@entities/skills';
import type { Specialization } from '@entities/specialization';

const initialState: QuestionFilterState = {
	showAllSkills: false,
	showAllSpecializations: false,
	specializations: [],
	skills: [],
	rate: [],
	complexity: [],
};

const questionFilterSlice = createSlice({
	name: 'questionFilters',
	initialState,
	reducers: {
		selectSkill(state, action: PayloadAction<Skill>) {
			const skill = action.payload;

			const isAlreadySelected = state.skills.some(({ id }) => id === skill.id);

			state.skills = isAlreadySelected
				? state.skills.filter(({ id }) => id !== skill.id)
				: [...state.skills, skill];
		},

		toggleShowAllSkills(state) {
			state.showAllSkills = !state.showAllSkills;
		},

		setSpecialization(state, action: PayloadAction<Specialization>) {
			const specialization = action.payload;

			if (state.specializations[0]?.id === specialization.id) return;

			state.specializations = [specialization];
			state.skills = [];
			state.showAllSkills = false;
		},

		toggleShowAllSpecializations(state) {
			state.showAllSpecializations = !state.showAllSpecializations;
		},

		setComplexity(state, action: PayloadAction<number[]>) {
			state.complexity = action.payload;
		},

		setRating(state, action: PayloadAction<number[]>) {
			state.rate = action.payload;
		},

		resetFilters() {
			return initialState;
		},
	},
});

export const {
	selectSkill,
	setSpecialization,
	toggleShowAllSkills,
	toggleShowAllSpecializations,
	setComplexity,
	setRating,
	resetFilters,
} = questionFilterSlice.actions;

export const questionFilterReducer = questionFilterSlice.reducer;
