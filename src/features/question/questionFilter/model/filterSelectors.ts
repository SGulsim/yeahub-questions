import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@app/providers/store/configs/store';
import type { Specialization } from '@entities/specialization';
import type { Skill } from '@entities/skills';

const selectQuestionFiltersState = (state: RootState) => state.questionFilters;

export const selectSkillsFilter = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.skills
);

export const selectShowAllSkills = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.showAllSkills
);

export const selectSpecializationsFilter = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.specializations
);

export const selectShowAllSpecializations = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.showAllSpecializations
);

export const selectActiveSpecialization = createSelector(
	[selectSpecializationsFilter],
	(specializations): Specialization | null => specializations[0] ?? null
);

export const selectActiveSpecializationId = createSelector(
	[selectActiveSpecialization],
	(specialization): number | null => specialization?.id ?? null
);

export const selectActiveRate = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.rate[0] ?? null
);

export const selectActiveComplexity = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.complexity[0] ?? null
);

export const selectAllComplexity = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.complexity
);

export const selectAllRate = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.rate
);

export const selectKeywords = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.keywords
);

export const selectQuestionFilters = createSelector(
	[
		selectSkillsFilter,
		selectSpecializationsFilter,
		selectAllComplexity,
		selectAllRate,
		selectKeywords,
	],
	(skills, specializations, complexity, rate, keywords) => ({
		skills: skills.map((skill: Skill) => skill.id),
		specialization: specializations[0]?.id,
		complexity,
		rate,
		keywords,
	})
);

export const selectHasActiveFilters = createSelector(
	[selectQuestionFilters],
	({ skills, complexity, rate, keywords }) => {
		return (
			skills.length > 0 ||
			complexity.length > 0 ||
			rate.length > 0 ||
			keywords.length > 0
		);
	}
);

export const selectSelectedSkillIds = createSelector(
	[selectSkillsFilter],
	(skills) => skills.map((skill: Skill) => skill.id)
);

export const makeSelectIsSkillSelected = (skillId: number) =>
	createSelector([selectSelectedSkillIds], (selectedIds) =>
		selectedIds.includes(skillId)
	);

export const makeSelectIsSpecializationSelected = (specializationId: number) =>
	createSelector(
		[selectActiveSpecializationId],
		(activeId) => activeId === specializationId
	);
