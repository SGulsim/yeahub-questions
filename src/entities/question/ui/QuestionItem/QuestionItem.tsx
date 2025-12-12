import styles from './QuestionItem.module.css';
import { useState } from 'react';
import preview from '@shared/assets/preview.jpg';
import arrowRight from '@shared/assets/arrowRight.svg';
import QuestionMeta from '../QuestionMeta/QuestionMeta';
import Image from '@shared/ui/Image/Image';
import { Link } from 'react-router-dom';

interface QuestionItemProps {
	id: number;
	title: string;
	body: string;
}

const QuestionItem = ({ id, title, body }: QuestionItemProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen((prev) => !prev);

	return (
		<li className={`${styles.item} ${isOpen ? styles.open : ''}`}>
			<div
				className={`${styles.title} text-20-med`}
				role='button'
				onClick={handleClick}
			>
				{title}
			</div>
			<div className={styles.content}>
				<QuestionMeta />
				<Image src={preview} alt={'превью'} />
				<div className={styles.body}>{body}</div>
				<Link to={`/detail:${id}`} className={styles.link}>
					Подробнее
					<Image src={arrowRight} alt={'arrowRight'} />
				</Link>
			</div>
		</li>
	);
};

export default QuestionItem;
