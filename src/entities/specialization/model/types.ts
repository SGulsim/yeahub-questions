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

export interface SpecializationApiResponse {
	page: number;
	total: number;
	limit: number;
	data: Specialization[];
}
