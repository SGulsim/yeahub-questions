import { QuestionItem } from '@entities/question';
import styles from './QuestionList.module.css';
import { useQuestions } from '@features/question/hooks/useQuestions';

const QuestionList = () => {
	const { questions, isLoading, isError } = useQuestions();

	if (isLoading) return <div>Загрузка...</div>;
	if (isError) return <div>Ошибка...</div>;

	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<h3 className={styles.text}>Вопросы React, Javascript</h3>
				<ul className={styles.list}>
					{questions &&
						questions.map((question) => (
							<QuestionItem key={question.id} question={question} />
						))}
				</ul>
			</article>
		</div>
	);
};

export default QuestionList;
