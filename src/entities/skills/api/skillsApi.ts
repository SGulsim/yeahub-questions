import { baseApi } from '@shared/api';
import type { ApiResponse } from '@shared/model/types';
import type { Skill } from '../model/types';

const skillsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchSkills: builder.query<Skill[], void>({
			query: () => `skills`,
			transformResponse: (response: ApiResponse<Skill>) => response.data,
		}),
	}),
});

export const { useFetchSkillsQuery } = skillsApi;

export default skillsApi;
