import { baseApi } from '@shared/api';
import type { PublicQuestion } from '../model/types';
import type { ApiResponse } from '@shared/model';
import { logoQuestion, preview } from '@shared/assets';

const questionApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchQuestions: builder.query<PublicQuestion[], void>({
			query: () => 'questions/public-questions',
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
