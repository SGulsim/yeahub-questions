import styles from './QuestionDetailPage.module.css';
import { QuestionInfo, QuestionSidebar } from '@widgets/question';
import { useParams } from 'react-router-dom';

const QuestionDetailPage = () => {
	const { questionId } = useParams<{ questionId: string }>();

	return (
		<main className={styles.content}>
			<QuestionInfo questionId={questionId!} />
			<QuestionSidebar questionId={questionId!} />
		</main>
	);
};

export default QuestionDetailPage;
