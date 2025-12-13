import type { RootState } from '@app/providers/store/configs/store';

export const selectSkillsFilter = (state: RootState) =>
	state.questionFilters.skills;

export const selectShowAllSkills = (state: RootState) =>
	state.questionFilters.showAllSkills;

export const selectSpecializationsFilter = (state: RootState) =>
	state.questionFilters.specializations;

export const selectShowAllSpecializations = (state: RootState) =>
	state.questionFilters.showAllSpecializations;

export const selectActiveSpecialization = (state: RootState) =>
	state.questionFilters.specializations[0] ?? null;

export const selectActiveRate = (state: RootState) =>
	state.questionFilters.rate[0] ?? null;

export const selectActiveComplexity = (state: RootState) =>
	state.questionFilters.complexity[0] ?? null;

export const selectQuestionFilters = (state: RootState) => ({
	skills: state.questionFilters.skills.map((skill) => skill.id),
	specialization: state.questionFilters.specializations[0]?.id,
	complexity: state.questionFilters.complexity,
	rate: state.questionFilters.rate,
});
