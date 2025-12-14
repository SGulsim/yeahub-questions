import styles from './QuestionList.module.css';
import { useAppDispatch, useAppSelector } from '@app/providers/store';
import {
	selectActiveSpecialization,
	selectQuestionFilters,
} from '@features/question/questionFilter';
import {
	QuestionPagePagination,
	selectQuestionsPage,
} from '@features/question/questionPagination';
import { useFetchQuestionsQuery } from '@entities/question/api/questionApi';
import QuestionListSkeleton from './QuestionListSkeleton';
import { EmptyState } from '@shared/ui';
import { resetFilters } from '@features/question/questionFilter/model/filterSlice';
import { QuestionItem } from '@entities/question';

const QuestionList = () => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector(selectQuestionFilters);
	const activeSpecialization = useAppSelector(selectActiveSpecialization);
	const page = useAppSelector(selectQuestionsPage);

	const queryArgs = activeSpecialization
		? {
				...filters,
				specialization: activeSpecialization.id,
				page,
				limit: 10,
		  }
		: undefined;

	const {
		data: questionsResponse,
		isLoading,
		isFetching,
	} = useFetchQuestionsQuery(queryArgs);

	if (isLoading || isFetching) return <QuestionListSkeleton count={10} />;

	if (!questionsResponse?.data || questionsResponse.data.length === 0)
		return (
			<EmptyState
				title='Вопросы не найдены'
				message='Попробуйте изменить параметры фильтрации или выбрать другую специализацию'
				actionLabel='Сбросить фильтры'
				onAction={() => {
					dispatch(resetFilters());
				}}
			/>
		);

	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<h3 className={styles.text}>Вопросы {activeSpecialization?.title}</h3>
				<ul className={styles.list}>
					{questionsResponse.data.map((question) => (
						<QuestionItem key={question.id} question={question} />
					))}
				</ul>

				<QuestionPagePagination questionsResponse={questionsResponse} />
			</article>
		</div>
	);
};

export default QuestionList;
