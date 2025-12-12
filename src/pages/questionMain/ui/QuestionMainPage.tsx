import styles from './QuestionMainPage.module.css';
import { QuestionFilters } from '@widgets/questionFilters';
import QuestionList from '@widgets/questionList/ui/QuestionList';

const QuestionMainPage = () => {
	return (
		<main className={styles.content}>
			<QuestionList />
			<QuestionFilters />
		</main>
	);
};

export default QuestionMainPage;
