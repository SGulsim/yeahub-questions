import type { Skill } from '@entities/skills';
import type { Specialization } from '@entities/specialization';

export interface QuestionFilterState {
	showAllSkills: boolean;
	showAllSpecializations: boolean;
	specializations: Specialization[];
	skills: Skill[];
	rate: number[];
	complexity: number[];
}
