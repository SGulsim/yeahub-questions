import { baseApi } from '@shared/api';
import type { Specialization } from '../model/types';
import type { ApiResponse } from '@shared/model/types';

const specializationApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchSpecializations: builder.query<Specialization[], void>({
			query: () => `specializations`,
			transformResponse: (response: ApiResponse<Specialization>) =>
				response.data,
		}),
	}),
});

export const { useFetchSpecializationsQuery } = specializationApi;

export default specializationApi;
