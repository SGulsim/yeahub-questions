import styles from './QuestionDetail.module.css';

const QuestionDetailSkeleton = () => {
	return (
		<main className={styles.content}>
			<div className={`${styles.skeletonBackLink} skeleton-pulse`}></div>

			<section className={styles.details}>
				<div className={styles.skeletonMainContent}>
					<div className={styles.skeletonBrief}>
						<div className={`${styles.skeletonImage} skeleton-pulse`}></div>
						<div className={styles.skeletonBriefContent}>
							<div
								className={`${styles.skeletonBriefTitle} skeleton-pulse`}
							></div>
							<div
								className={`${styles.skeletonBriefText} skeleton-pulse`}
							></div>
						</div>
					</div>

					<div className={styles.skeletonArticle}>
						<div
							className={`${styles.skeletonArticleTitle} skeleton-pulse`}
						></div>
						<div
							className={`${styles.skeletonArticleText} skeleton-pulse`}
						></div>
					</div>

					<div className={styles.skeletonArticle}>
						<div
							className={`${styles.skeletonArticleTitle} skeleton-pulse`}
						></div>
						<div
							className={`${styles.skeletonArticleText} skeleton-pulse`}
						></div>
						<div
							className={`${styles.skeletonArticleText} skeleton-pulse`}
						></div>
					</div>
				</div>

				<div className={styles.skeletonSidebar}>
					<div
						className={`${styles.skeletonSidebarTitle} skeleton-pulse`}
					></div>
					<div className={styles.skeletonSidebarMeta}>
						<div
							className={`${styles.skeletonSidebarMetaItem} skeleton-pulse`}
						></div>
						<div
							className={`${styles.skeletonSidebarMetaItem} skeleton-pulse`}
						></div>
					</div>

					<div
						className={`${styles.skeletonSidebarTitle} skeleton-pulse`}
					></div>
					<div className={styles.skeletonTags}>
						{[...Array(4)].map((_, i) => (
							<div
								key={i}
								className={`${styles.skeletonTag} skeleton-pulse`}
							></div>
						))}
					</div>

					<div
						className={`${styles.skeletonSidebarTitle} skeleton-pulse`}
					></div>
					<div className={styles.skeletonTags}>
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className={`${styles.skeletonKeyword} skeleton-pulse`}
							></div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default QuestionDetailSkeleton;
