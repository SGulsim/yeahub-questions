import { Pagination } from '@shared/ui';
import { useAppDispatch } from '@app/providers/store/configs/hooks';
import { selectQuestionsPage } from '../model/questionPageSelectors';
import { setPage } from '../model/questionPageSlice';
import { useSelector } from 'react-redux';
import type { PublicQuestionsApiResponse } from '@entities/question/model/types';

interface QuestionPagePaginationProps {
	questionsResponse?: PublicQuestionsApiResponse;
}

export const QuestionPagePagination = ({
	questionsResponse,
}: QuestionPagePaginationProps) => {
	const dispatch = useAppDispatch();
	const page = useSelector(selectQuestionsPage);

	const handlePreviousPage = () => {
		if (page > 1) {
			dispatch(setPage(page - 1));
		}
	};

	const handleNextPage = () => {
		if (
			questionsResponse &&
			page < Math.ceil(questionsResponse.total / questionsResponse.limit)
		) {
			dispatch(setPage(page + 1));
		}
	};

	const handlePageClick = (newPage: number) => {
		dispatch(setPage(newPage));
	};

	if (
		!questionsResponse?.data ||
		questionsResponse.total <= questionsResponse.limit
	)
		return null;

	const totalPages = Math.ceil(
		questionsResponse.total / questionsResponse.limit
	);

	return (
		<Pagination
			bottom
			handlePreviousPage={handlePreviousPage}
			handleNextPage={handleNextPage}
			handlePageClick={handlePageClick}
			currentPage={page}
			totalPages={totalPages}
		/>
	);
};
