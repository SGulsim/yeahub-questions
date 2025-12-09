import styles from './QuestionMeta.module.css';

const QuestionMeta = () => {
	return (
		<div className={styles.meta}>
			<div className={styles.item}>
				<span className={styles.title}>Рейтинг:</span>
				<span className={styles.range}>4</span>
			</div>
			<div className={styles.item}>
				<span className={styles.title}>Сложность:</span>
				<span className={styles.range}>10</span>
			</div>
		</div>
	);
};

export default QuestionMeta;
