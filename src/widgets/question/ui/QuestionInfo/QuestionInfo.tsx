import styles from './QuestionInfo.module.css';
import { Article, Image } from '@shared/ui';
import type { PublicQuestion } from '@entities/question/model/types';
interface QuestionInfo {
	question: PublicQuestion;
}

const QuestionInfo = ({ question }: QuestionInfo) => {
	const { imageSrc, title, description, shortAnswer, longAnswer } = question;

	return (
		<div className={styles.answerInfo}>
			<Article type={'brief'}>
				<Image src={imageSrc} alt={'logoQuestion'} />
				<div className={styles.brief}>
					<h4 className='text-24-med'>{title}</h4>
					<p className={'text-16-med'}>{description}</p>
				</div>
			</Article>

			<Article type={'short'}>
				<h4 className='text-20-med'>{title}</h4>
				<p className={'text-16-med'}>{shortAnswer}</p>
			</Article>

			<Article type={'long'}>
				<h4 className='text-20-med'>{title}</h4>
				<p className={'text-16-med'}>{longAnswer}</p>
			</Article>
		</div>
	);
};

export default QuestionInfo;
