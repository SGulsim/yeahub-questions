import styles from './QuestionItem.module.css';
import { useState } from 'react';
import type { PublicQuestion } from '@entities/question/model/types';
import QuestionMeta from '../QuestionMeta/QuestionMeta';
import { Image } from '@shared/ui';
import { Link } from 'react-router-dom';
import { arrowRight } from '@shared/assets';
interface QuestionItemProps {
	question: PublicQuestion;
}

const QuestionItem = ({ question }: QuestionItemProps) => {
	const { id, title, rate, complexity, imageSrc, shortAnswer } = question;
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen((prev) => !prev);

	return (
		<li
			className={`${styles.item} ${isOpen ? styles.open : ''}`}
			onClick={handleClick}
		>
			<div className={`${styles.title} text-20-med`}>{title}</div>
			<div className={styles.content}>
				<QuestionMeta rate={rate} complexity={complexity} />
				<Image src={imageSrc} alt={'превью'} />
				<div className={styles.body}>{shortAnswer}</div>
				<Link to={`/detail/${id}`} className={styles.link}>
					Подробнее
					<Image src={arrowRight} alt={'arrowRight'} />
				</Link>
			</div>
		</li>
	);
};

export default QuestionItem;
