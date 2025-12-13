import { useQuestionById } from '@features/question/hooks/useQuestionById';
import styles from './QuestionInfo.module.css';
import { Article, Image } from '@shared/ui';
import { logoQuestion } from '@shared/assets';

interface QuestionInfo {
	questionId: string;
}

const QuestionInfo = ({ questionId }: QuestionInfo) => {
	const { question, isLoading, isError } = useQuestionById(questionId);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError) return <div>Ошибка...</div>;

	return (
		<section className={styles.answerInfo}>
			<Article type={'brief'}>
				<Image src={question.imageSrc ?? logoQuestion} alt={'logoQuestion'} />
				<div className={styles.brief}>
					<h4 className='text-24-med'>{question.title}</h4>
					<p className={'text-16-med'}>{question.description}</p>
				</div>
			</Article>

			<Article type={'short'}>
				<h4 className='text-20-med'>{question.title}</h4>
				<p className={'text-16-med'}>{question.shortAnswer}</p>
			</Article>

			<Article type={'long'}>
				<h4 className='text-20-med'>{question.title}</h4>
				<p className={'text-16-med'}>{question.longAnswer}</p>
			</Article>
		</section>
	);
};

export default QuestionInfo;
