import styles from './PaginationButtons.module.css';
import type { PaginationProps } from '../../model/types';
import { getPaginationRange } from '@shared/lib';
import { DOTS } from '@shared/lib/helpers/getPaginationRange';
import { Button, Image } from '@shared/ui';
import { arrowLeftCircle, arrowRightCircle } from '@shared/assets';

export default function PaginationButtons({
	handleNextPage,
	handlePreviousPage,
	handlePageClick,
	currentPage,
	totalPages,
}: PaginationProps) {
	const pages = getPaginationRange({
		currentPage,
		totalPages,
		siblingCount: 2,
	});

	const isFirstPage = currentPage <= 1;
	const isLastPage = currentPage >= totalPages;

	return (
		<div className={styles.pagination}>
			<Button
				type='pagination'
				size='M'
				disabled={isFirstPage}
				className={`${styles.arrowButton} ${
					isFirstPage ? styles.arrowDisabled : ''
				}`}
				onClick={handlePreviousPage}
				aria-label='Предыдущая страница'
			>
				<Image src={arrowLeftCircle} className={styles.arrowIcon} alt='Назад' />
			</Button>

			<div className={styles.list}>
				{pages.map((item, index) => {
					if (item === DOTS) {
						return (
							<span key={`dots-${index}`} className={styles.dots}>
								…
							</span>
						);
					}

					const isActive = item === currentPage;

					return (
						<Button
							key={item}
							type='pagination'
							size='M'
							disabled={isActive}
							isActive={isActive}
							className={styles.pageButton}
							onClick={() => handlePageClick(item)}
						>
							{item}
						</Button>
					);
				})}
			</div>

			<Button
				type='pagination'
				size='M'
				disabled={isLastPage}
				className={`${styles.arrowButton} ${
					isLastPage ? styles.arrowDisabled : ''
				}`}
				onClick={handleNextPage}
				aria-label='Следующая страница'
			>
				<Image
					src={arrowRightCircle}
					className={styles.arrowIcon}
					alt='Вперёд'
				/>
			</Button>
		</div>
	);
}
