import { baseApi } from '@shared/api';
import type { PublicQuestion, PublicQuestionParams } from '../model/types';
import type { ApiResponse } from '@shared/model';
import { logoQuestion, preview } from '@shared/assets';

const questionApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchQuestions: builder.query<
			PublicQuestion[],
			PublicQuestionParams | void
		>({
			query: (params) => {
				console.log(params);
				const queryParams: Record<string, string> = {};
				if (params?.specialization) {
					queryParams.specialization = String(params.specialization);
				}
				if (params?.skills && params.skills.length > 0) {
					queryParams.skills = params.skills.join(',');
				}
				if (params?.rate && params.rate.length > 0) {
					console.log(params.rate.join(','));

					queryParams.rate = params.rate.join(',');
				}
				if (params?.complexity && params.complexity.length > 0) {
					queryParams.complexity = params.complexity.join(',');
				}

				return {
					url: 'questions/public-questions',
					params: Object.keys(queryParams).length > 0 ? queryParams : undefined,
				};
			},
			transformResponse: (response: ApiResponse<PublicQuestion>) =>
				response.data.map((question) => ({
					...question,
					imageSrc: question.imageSrc || preview,
					keywords: question.keywords ?? [],
					questionSkills: question.questionSkills ?? [],
					questionSpecializations: question.questionSpecializations ?? [],
				})),
		}),
		fetchQuestionById: builder.query<PublicQuestion, string>({
			query: (id) => `questions/public-questions/${id}`,
			transformResponse: (question: PublicQuestion) => ({
				...question,
				imageSrc: question.imageSrc || logoQuestion,
				keywords: question.keywords ?? [],
				questionSkills: question.questionSkills ?? [],
			}),
		}),
	}),
});

export const { useFetchQuestionsQuery, useFetchQuestionByIdQuery } =
	questionApi;

export default questionApi;
