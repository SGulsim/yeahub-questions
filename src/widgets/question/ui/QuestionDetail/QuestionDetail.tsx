import styles from './QuestionDetail.module.css';
import type { PublicQuestion } from '@entities/question/model/types';
import QuestionInfo from '../QuestionInfo/QuestionInfo';
import QuestionSidebar from '../QuestionSidebar/QuestionSidebar';

interface QuestionDetailProps {
	question: PublicQuestion;
}

const QuestionDetail = ({ question }: QuestionDetailProps) => {
	return (
		<section className={styles.details}>
			<QuestionInfo question={question} />
			<QuestionSidebar question={question} />
		</section>
	);
};

export default QuestionDetail;
