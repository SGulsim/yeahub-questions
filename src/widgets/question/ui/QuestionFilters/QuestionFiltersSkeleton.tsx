import styles from './QuestionFilters.module.css';

const QuestionFiltersSkeleton = () => {
	return (
		<aside className={styles.filters}>
			<div className={`${styles.skeletonSearch} skeleton-pulse`}></div>

			<div className={styles.skeletonFilter}>
				<div className={`${styles.skeletonFilterTitle} skeleton-pulse`}></div>
				<div className={styles.skeletonFilterItems}>
					{[...Array(4)].map((_, i) => (
						<div
							key={i}
							className={`${styles.skeletonFilterItemLarge} skeleton-pulse`}
						></div>
					))}
				</div>
				<div className={`${styles.skeletonShowAll} skeleton-pulse`}></div>
			</div>

			<div className={styles.skeletonFilter}>
				<div className={`${styles.skeletonFilterTitle} skeleton-pulse`}></div>
				<div className={styles.skeletonFilterItems}>
					{[...Array(6)].map((_, i) => (
						<div
							key={i}
							className={`${styles.skeletonFilterItem} skeleton-pulse`}
						></div>
					))}
				</div>
				<div className={`${styles.skeletonShowAll} skeleton-pulse`}></div>
			</div>

			<div className={styles.skeletonFilter}>
				<div className={`${styles.skeletonFilterTitle} skeleton-pulse`}></div>
				<div className={styles.skeletonFilterItems}>
					{[...Array(4)].map((_, i) => (
						<div
							key={i}
							className={`${styles.skeletonFilterItem} skeleton-pulse`}
						></div>
					))}
				</div>
			</div>

			<div className={styles.skeletonFilter}>
				<div className={`${styles.skeletonFilterTitle} skeleton-pulse`}></div>
				<div className={styles.skeletonFilterItems}>
					{[...Array(5)].map((_, i) => (
						<div
							key={i}
							className={`${styles.skeletonFilterItem} skeleton-pulse`}
						></div>
					))}
				</div>
			</div>
		</aside>
	);
};

export default QuestionFiltersSkeleton;
