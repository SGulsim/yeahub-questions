import styles from './QuestionDetailPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { Image } from '@shared/ui';
import { arrowLeft } from '@shared/assets';
import { useFetchQuestionByIdQuery } from '@entities/question/api/questionApi';
import { QuestionDetail, QuestionDetailSkeleton } from '@widgets/question';
import { ErrorFallback } from '@widgets/error';

const QuestionDetailPage = () => {
	const { questionId } = useParams<{ questionId: string }>();
	const { data: question, isLoading } = useFetchQuestionByIdQuery(questionId!);

	if (isLoading) return <QuestionDetailSkeleton />;
	if (!question) return <ErrorFallback />;

	return (
		<main className={styles.content}>
			<Link to={'/'} className={styles.link}>
				<Image src={arrowLeft} alt={'arrowLeft'} />
				<span className={styles.back}>Назад</span>
			</Link>
			<QuestionDetail question={question} />
		</main>
	);
};

export default QuestionDetailPage;
