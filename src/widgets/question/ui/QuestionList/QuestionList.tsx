import styles from './QuestionList.module.css';
import { QuestionItem } from '@entities/question';
import { useFetchQuestionsQuery } from '@entities/question/api/questionApi';
import { useAppSelector } from '@app/providers/store/configs/hooks';
import {
	selectActiveSpecialization,
	selectQuestionFilters,
} from '@features/question/questionFilter';

const QuestionList = () => {
	const { skills, rate, complexity } = useAppSelector(selectQuestionFilters);
	const activeSpecialization = useAppSelector(selectActiveSpecialization);

	const queryArgs = activeSpecialization
		? {
				skills,
				rate,
				complexity,
				specialization: activeSpecialization.id,
		  }
		: undefined;

	const {
		data: questions,
		isLoading,
		isError,
	} = useFetchQuestionsQuery(queryArgs, {
		refetchOnMountOrArgChange: true,
	});

	if (!activeSpecialization) return <div>Загрузка...</div>;
	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !questions) return <div>Ошибка...</div>;

	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<h3 className={styles.text}>Вопросы {activeSpecialization.title}</h3>
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
