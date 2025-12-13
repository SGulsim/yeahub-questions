import styles from './QuestionDetailPage.module.css';
import { useFetchQuestionByIdQuery } from '@entities/question/api/questionApi';
import { Link, useParams } from 'react-router-dom';
import { Image } from '@shared/ui';
import { arrowLeft } from '@shared/assets';
import QuestionDetail from '@widgets/question/ui/QuestionDetail/QuestionDetail';

const QuestionDetailPage = () => {
	const { questionId } = useParams<{ questionId: string }>();
	const {
		data: question,
		isLoading,
		isError,
	} = useFetchQuestionByIdQuery(questionId!);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !question) return <div>Ошибка...</div>;

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
