import { baseApi } from '@shared/api';
import type { ApiResponse } from '@shared/model/types';
import type { Skill } from '../model/types';
export interface FetchSkillsParams {
	specializationId: number;
}

const skillsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchSkills: builder.query<Skill[], FetchSkillsParams>({
			query: ({ specializationId }) => ({
				url: 'skills',
				params: {
					specializations: specializationId,
				},
			}),
			transformResponse: (response: ApiResponse<Skill>) => response.data,
		}),
	}),
});

export const { useFetchSkillsQuery } = skillsApi;

export default skillsApi;
