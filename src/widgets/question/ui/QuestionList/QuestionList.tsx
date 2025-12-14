import styles from './QuestionList.module.css';
import { QuestionItem } from '@entities/question';
import { useFetchQuestionsQuery } from '@entities/question/api/questionApi';
import { useAppSelector } from '@app/providers/store/configs/hooks';
import {
	selectActiveSpecialization,
	selectQuestionFilters,
} from '@features/question/questionFilter';

const QuestionList = () => {
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

	const {
		data: questions,
		isLoading,
		isError,
	} = useFetchQuestionsQuery(queryArgs);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !questions) return <div>Ошибка...</div>;

	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<h3 className={styles.text}>Вопросы {activeSpecialization.title}</h3>
				<ul className={styles.list}>
					{questions.length > 0 ? (
						questions.map((question) => (
							<QuestionItem key={question.id} question={question} />
						))
					) : (
						<div>Нет данных по данному запросу</div>
					)}
				</ul>
			</article>
		</div>
	);
};

export default QuestionList;
