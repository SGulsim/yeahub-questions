import type { Skill } from '@entities/skills';
import type { Specialization } from '@entities/specialization';
export interface PublicQuestion {
	id: number;
	title: string;
	description: string;
	code: string;
	imageSrc: string;
	keywords: string[];
	longAnswer: string;
	shortAnswer: string;
	complexity: number;
	rate: number;
	questionSkills: Skill[];
	questionSpecializations: Specialization[];
}
export interface PublicQuestionsApiResponse {
	data: PublicQuestion[];
	limit: number;
	page: number;
	total: number;
}
export interface PublicQuestionParams {
	skills?: number[];
	specialization?: number;
	rate?: number[];
	complexity?: number[];
	keywords?: string[];
	page?: number;
	limit?: number;
}
