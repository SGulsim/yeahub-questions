import styles from './QuestionList.module.css';
interface QuestionListSkeletonProps {
	count?: number;
}

const QuestionListSkeleton = ({ count = 5 }: QuestionListSkeletonProps) => {
	return (
		<div className={styles.skeletonWrapper}>
			<article className={styles.content}>
				<div className={`${styles.skeletonHeader} skeleton-pulse`}></div>

				<ul className={styles.listSkeleton}>
					{[...Array(count)].map((_, i) => (
						<li key={i} className={styles.itemSkeleton}>
							<div className={`${styles.skeletonTitle} skeleton-pulse`}></div>

							<div className={styles.content}>
								<div className={`${styles.skeletonText} skeleton-pulse`}></div>
							</div>
						</li>
					))}
				</ul>
			</article>
		</div>
	);
};

export default QuestionListSkeleton;
