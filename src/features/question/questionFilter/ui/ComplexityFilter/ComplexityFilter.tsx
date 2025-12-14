import { FilterBase } from '@shared/ui/index';
import { difficultyButtons } from '../../model/constants';
import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import { setComplexity } from '../../model/filterSlice';

const ComplexityFilter = () => {
	const dispatch = useAppDispatch();
	const activeComplexity = useAppSelector(
		(state) => state.questionFilters.complexity
	);

	const items = difficultyButtons.map((btn) => {
		const isActive =
			activeComplexity.length === btn.values.length &&
			btn.values.every((value) => activeComplexity.includes(value));

		return {
			id: btn.id,
			title: btn.title,
			isActive,
		};
	});

	const handleItemClick = (id: number) => {
		const button = difficultyButtons.find((btn) => btn.id === id);
		if (!button) return;

		const isActive =
			activeComplexity.length === button.values.length &&
			button.values.every((value) => activeComplexity.includes(value));

		dispatch(setComplexity(isActive ? [] : button.values));
	};

	return (
		<FilterBase
			title='Уровень сложности'
			items={items}
			maxVisible={items.length}
			onItemClick={handleItemClick}
		/>
	);
};

export default ComplexityFilter;
