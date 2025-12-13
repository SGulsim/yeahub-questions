import styles from './QuestionMeta.module.css';
interface QuestionMetaProps {
	rate: number;
	complexity: number;
}

const QuestionMeta = ({ rate, complexity }: QuestionMetaProps) => {
	return (
		<div className={styles.meta}>
			<div className={styles.item}>
				<span className={styles.title}>Рейтинг:</span>
				<span className={styles.range}>{rate}</span>
			</div>
			<div className={styles.item}>
				<span className={styles.title}>Сложность:</span>
				<span className={styles.range}>{complexity}</span>
			</div>
		</div>
	);
};

export default QuestionMeta;
