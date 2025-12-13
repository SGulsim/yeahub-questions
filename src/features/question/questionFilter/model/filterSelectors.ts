import type { RootState } from '@app/providers/store/configs/store';

export const selectSkillsFilter = (state: RootState) =>
	state.questionFilters.skills;

export const selectShowAllSkills = (state: RootState) =>
	state.questionFilters.showAllSkills;

export const selectSpecializationsFilter = (state: RootState) =>
	state.questionFilters.specializations;

export const selectShowAllSpecializations = (state: RootState) =>
	state.questionFilters.showAllSpecializations;
