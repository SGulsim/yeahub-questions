import styles from './QuestionDetailPage.module.css';
import { useParams } from 'react-router-dom';

const QuestionDetailPage = () => {
	const { questionId } = useParams<{ questionId: string }>();
	return (
		<main className={styles.content}>
			<div>{}</div>
		</main>
	);
};

export default QuestionDetailPage;
