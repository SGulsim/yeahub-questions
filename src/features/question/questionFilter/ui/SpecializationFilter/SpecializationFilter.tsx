import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import {
	selectShowAllSpecializations,
	selectSpecializationsFilter,
} from '../../model/filterSelectors';
import { FilterBase } from '@shared/ui';
import {
	toggleShowAllSpecializations,
	toggleSpecialization,
} from '../../model/filterSlice';
import { useFetchSpecializationsQuery } from '@entities/specialization/api/specializationApi';

const SpecializationFilter = () => {
	const selectedSkills = useAppSelector(selectSpecializationsFilter);
	const showAll = useAppSelector(selectShowAllSpecializations);
	const dispatch = useAppDispatch();

	const { data: skills, isLoading, isError } = useFetchSpecializationsQuery();

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !skills) return <div>Ошибка...</div>;

	const items = skills.map((skill) => ({
		id: skill.id,
		title: skill.title,
		isActive: selectedSkills.includes(skill.id),
	}));

	return (
		<FilterBase
			title='Специализации'
			items={items}
			maxVisible={2}
			showAll={showAll}
			onToggleShowAll={() => dispatch(toggleShowAllSpecializations())}
			onItemClick={(id) => dispatch(toggleSpecialization(id))}
		/>
	);
};

export default SpecializationFilter;
