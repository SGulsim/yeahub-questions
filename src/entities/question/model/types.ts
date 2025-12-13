export interface Specialization {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
	createdBy: {
		id: string;
		username: string;
	};
}

export interface Skill {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}

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
