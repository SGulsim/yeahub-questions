import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { QuestionFilterState } from './types';
import type { Skill } from '@entities/skills';
import type { Specialization } from '@entities/specialization';

const initialState: QuestionFilterState = {
	specializations: [],
	skills: [],
	rate: [],
	complexity: [],
	keywords: [],
	showAllSkills: false,
	showAllSpecializations: false,
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

		toggleShowAllSpecializations(state) {
			state.showAllSpecializations = !state.showAllSpecializations;
		},

		setSpecialization(state, action: PayloadAction<Specialization>) {
			const specialization = action.payload;

			if (state.specializations[0]?.id === specialization.id) return;

			state.specializations = [specialization];
			state.skills = [];
			state.showAllSkills = false;
		},

		setComplexity(state, action: PayloadAction<number[]>) {
			state.complexity = action.payload;
		},

		setRating(state, action: PayloadAction<number[]>) {
			state.rate = action.payload;
		},

		setSearch(state, action: PayloadAction<string>) {
			const trimmed = action.payload.trim();
			state.keywords = trimmed ? [trimmed] : [];
		},

		resetFilters(state) {
			return {
				...initialState,
				specializations: state.specializations,
			};
		},
	},
});

export const {
	selectSkill,
	toggleShowAllSkills,
	toggleShowAllSpecializations,
	setSpecialization,
	setComplexity,
	setRating,
	setSearch,
	resetFilters,
} = questionFilterSlice.actions;

export const questionFilterReducer = questionFilterSlice.reducer;
