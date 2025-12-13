import { baseApi } from '@shared/api';
import type {
	PublicQuestion,
	PublicQuestionsApiResponse,
} from '../model/types';

const questionApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchQuestions: builder.query<PublicQuestionsApiResponse, null>({
			query: () => 'questions/public-questions',
		}),
		fetchQuestionById: builder.query<PublicQuestion, string>({
			query: (questionId) => `questions/public-questions/${questionId}`,
		}),
	}),
});

export const { useFetchQuestionsQuery, useFetchQuestionByIdQuery } =
	questionApi;

export default questionApi;
