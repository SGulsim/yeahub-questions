import { QuestionItem } from '@entities/question';
import styles from './QuestionList.module.css';
import { useFetchQuestionsQuery } from '@entities/question/api/questionApi';

const QuestionList = () => {
	const { data: questions, isLoading, isError } = useFetchQuestionsQuery();

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !questions) return <div>Ошибка...</div>;

	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<h3 className={styles.text}>Вопросы React, Javascript</h3>
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
