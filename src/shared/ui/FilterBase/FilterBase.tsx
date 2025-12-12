import styles from './FilterBase.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

interface Data {
	id: number;
	name: string;
}

interface FilterBaseProps {
	title: string;
	items: Data[];
	isNeedAll?: boolean;
}

const FilterBase = ({ title, items, isNeedAll }: FilterBaseProps) => {
	const [showAll, setShowAll] = useState(false);

	let visibleButtons;
	if (isNeedAll) {
		visibleButtons = showAll ? items : items.slice(0, 5);
	} else {
		visibleButtons = items;
	}

	const handleShowAll = () => setShowAll(true);
	const handleHideAll = () => setShowAll(false);

	return (
		<div className={styles.filters}>
			<span className='text-14-reg'>{title}</span>
			<div
				className={`${styles.btns} ${isNeedAll ? styles['multi-column'] : ''}`}
			>
				{visibleButtons.map(({ id, name }) => (
					<Button key={id} type='skill' size={'M'} state={'default'} isActive>
						{name}
					</Button>
				))}
			</div>
			{isNeedAll && (
				<Button
					type='link'
					size='M'
					state='default'
					onClick={showAll ? handleHideAll : handleShowAll}
				>
					{showAll ? 'Скрыть' : 'Посмотреть все'}
				</Button>
			)}
		</div>
	);
};

export default FilterBase;
