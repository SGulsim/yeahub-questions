import { useAppDispatch, useAppSelector } from '@app/providers/store';
import { ratingButtons } from '../../model/constants';
import { setRating } from '../../model/filterSlice';
import { FilterBase } from '@shared/ui';

const RatingFilter = () => {
	const dispatch = useAppDispatch();
	const activeRate = useAppSelector((state) => state.questionFilters.rate);

	const items = ratingButtons.map((rate) => {
		const isActive =
			activeRate.length === rate.value.length &&
			rate.value.every((value) => activeRate.includes(value));

		return {
			id: rate.id,
			title: rate.title,
			isActive,
		};
	});

	const handleItemClick = (id: number) => {
		const button = ratingButtons.find((rate) => rate.id === id);
		if (!button) return;

		const isActive =
			activeRate.length === button.value.length &&
			button.value.every((value) => activeRate.includes(value));

		dispatch(setRating(isActive ? [] : button.value));
	};

	return (
		<FilterBase
			title='Рейтинг'
			items={items}
			maxVisible={items.length}
			onItemClick={handleItemClick}
		/>
	);
};

export default RatingFilter;
