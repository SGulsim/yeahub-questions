import styles from './QuestionItem.module.css';
import { useState } from 'react';

interface QuestionItemProps {
	title: string;
	body: string;
}

const QuestionItem = ({ title, body }: QuestionItemProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen((prev) => !prev);

	return (
		<li className={`${styles.item} ${isOpen ? styles.open : ''}`}>
			<div className='text-20-med' role='button' onClick={handleClick}>
				{title}
			</div>
			<div className={styles.body}>{body}</div>
		</li>
	);
};

export default QuestionItem;
