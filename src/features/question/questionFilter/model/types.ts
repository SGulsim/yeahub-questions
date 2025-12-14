import type { Skill } from '@entities/skills';
import type { Specialization } from '@entities/specialization';
export interface QuestionFilterState {
	specializations: Specialization[];
	skills: Skill[];
	rate: number[];
	complexity: number[];
	keywords: string[];
	showAllSkills: boolean;
	showAllSpecializations: boolean;
}
