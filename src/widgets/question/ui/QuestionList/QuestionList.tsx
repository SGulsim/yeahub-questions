import styles from './QuestionList.module.css';
import { QuestionItem } from '@entities/question';
import { useFetchQuestionsQuery } from '@entities/question/api/questionApi';
import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import {
	selectActiveSpecialization,
	selectQuestionFilters,
} from '@features/question/questionFilter';
import { CenteredSpinner, EmptyState } from '@shared/ui';
import { resetFilters } from '@features/question/questionFilter/model/filterSlice';
import QuestionListSkeleton from './QuestionListSkeleton';

const QuestionList = () => {
	const dispatch = useAppDispatch();
	const { skills, rate, complexity, keywords } = useAppSelector(
		selectQuestionFilters
	);
	const activeSpecialization = useAppSelector(selectActiveSpecialization);

	const queryArgs = activeSpecialization
		? {
				skills,
				rate,
				complexity,
				specialization: activeSpecialization.id,
				keywords,
		  }
		: undefined;

	const { data: questions, isLoading } = useFetchQuestionsQuery(queryArgs);

	if (isLoading) return <QuestionListSkeleton count={questions?.length || 0} />;

	if (!questions || questions.length === 0)
		return (
			<EmptyState
				title='Вопросы не найдены'
				message='Попробуйте изменить параметры фильтрации или выбрать другую специализацию'
				actionLabel='Сбросить фильтры'
				onAction={() => dispatch(resetFilters())}
			/>
		);

	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<h3 className={styles.text}>Вопросы {activeSpecialization?.title}</h3>
				<ul className={styles.list}>
					{questions.map((question) => (
						<QuestionItem key={question.id} question={question} />
					))}
				</ul>
			</article>
		</div>
	);
};

export default QuestionList;
