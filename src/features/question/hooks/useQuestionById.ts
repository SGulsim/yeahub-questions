import { useFetchQuestionByIdQuery } from '@entities/question/api/questionApi';

export const useQuestionById = (questionId: string) => {
	const { data, isLoading, isError } = useFetchQuestionByIdQuery(questionId);

	if (!data)
		return {
			question: {
				id: 0,
				title: '',
				description: '',
				code: 0,
				imageSrc: '',
				keywords: null,
				longAnswer: '',
				shortAnswer: '',
				complexity: 0,
				rate: 0,
				questionSkills: null,
				questionSpecializations: null,
			},
			isLoading,
			isError,
		};

	return { question: data, isLoading, isError };
};
