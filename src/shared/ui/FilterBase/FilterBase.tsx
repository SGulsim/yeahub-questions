import styles from './FilterBase.module.css';
import type { FilterItem } from '@shared/model';
import { Button } from '@shared/ui';
interface FilterBaseProps {
	title: string;
	items: FilterItem[];
	maxVisible?: number;
	showAll?: boolean;
	onToggleShowAll?: () => void;
	onItemClick?: (id: number) => void;
}

const FilterBase = ({
	title,
	items,
	maxVisible,
	showAll,
	onToggleShowAll,
	onItemClick,
}: FilterBaseProps) => {
	const visibleItems =
		maxVisible && !showAll ? items.slice(0, maxVisible) : items;

	return (
		<div className={styles.filters}>
			<span className='text-14-reg'>{title}</span>

			<div
				className={`${styles.btns} ${showAll ? styles['multi-column'] : ''}`}
			>
				{visibleItems.map(({ id, title, isActive }) => (
					<Button
						key={id}
						type='skill'
						size='M'
						state='default'
						isActive={isActive}
						onClick={() => onItemClick?.(id)}
					>
						{title}
					</Button>
				))}
			</div>

			{maxVisible && onToggleShowAll && (
				<Button type='link' size='M' state='default' onClick={onToggleShowAll}>
					{showAll ? 'Скрыть' : 'Показать все'}
				</Button>
			)}
		</div>
	);
};

export default FilterBase;
