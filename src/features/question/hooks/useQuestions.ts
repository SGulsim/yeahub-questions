import { useFetchQuestionsQuery } from '@entities/question/api/questionApi';

export const useQuestions = () => {
	const { data, isLoading, isError } = useFetchQuestionsQuery();

	if (!data)
		return {
			questions: [],
			isLoading,
			isError,
		};

	return { questions: data.data, isLoading, isError };
};
