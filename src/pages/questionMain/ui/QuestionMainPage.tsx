import { QuestionFilters, QuestionList } from '@widgets/question';
import styles from './QuestionMainPage.module.css';

const QuestionMainPage = () => {
	return (
		<main className={styles.content}>
			<QuestionList />
			<QuestionFilters />
		</main>
	);
};

export default QuestionMainPage;
