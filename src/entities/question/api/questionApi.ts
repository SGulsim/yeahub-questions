import { baseApi } from '@shared/api';
import { logoQuestion, preview } from '@shared/assets';
import type { ApiResponse } from '@shared/model';
import type {
	PublicQuestion,
	PublicQuestionParams,
	PublicQuestionsApiResponse,
} from '../model/types';

const cleanParams = (params: Partial<PublicQuestionParams>) => {
	const result: Record<string, string> = {};
	Object.entries(params).forEach(([key, value]) => {
		if (
			value !== undefined &&
			value !== null &&
			(Array.isArray(value) ? value.length > 0 : true)
		) {
			result[key] = Array.isArray(value) ? value.join(',') : String(value);
		}
	});
	return result;
};

const normalizeQuestion = (
	question: PublicQuestion,
	defaultImage: string
): PublicQuestion => ({
	...question,
	imageSrc: question.imageSrc || defaultImage,
	keywords: question.keywords ?? [],
	questionSkills: question.questionSkills ?? [],
	questionSpecializations: question.questionSpecializations ?? [],
});

const questionApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchQuestions: builder.query<
			PublicQuestionsApiResponse,
			(PublicQuestionParams & { page?: number }) | void
		>({
			query: (params) => ({
				url: 'questions/public-questions',
				params: params ? cleanParams(params) : undefined,
			}),
			transformResponse: (response: ApiResponse<PublicQuestion>) => ({
				...response,
				data: response.data.map((q) => normalizeQuestion(q, preview)),
			}),
		}),
		fetchQuestionById: builder.query<PublicQuestion, string>({
			query: (id) => `questions/public-questions/${id}`,
			transformResponse: (question: PublicQuestion) =>
				normalizeQuestion(question, logoQuestion),
		}),
	}),
});

export const { useFetchQuestionsQuery, useFetchQuestionByIdQuery } =
	questionApi;

export default questionApi;
