import { useEffect } from 'react';
import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import {
	selectShowAllSpecializations,
	selectActiveSpecialization,
} from '../../model/filterSelectors';
import { FilterBase } from '@shared/ui';
import {
	toggleShowAllSpecializations,
	setSpecialization,
} from '../../model/filterSlice';
import { useFetchSpecializationsQuery } from '@entities/specialization/api/specializationApi';

const DEFAULT_SPECIALIZATION_ID = 11;

const SpecializationFilter = () => {
	const activeSpecialization = useAppSelector(selectActiveSpecialization);
	const showAll = useAppSelector(selectShowAllSpecializations);
	const dispatch = useAppDispatch();

	const {
		data: specializations,
		isLoading,
		isError,
	} = useFetchSpecializationsQuery();

	useEffect(() => {
		if (!specializations || specializations.length === 0) return;
		if (activeSpecialization) return;

		const defaultSpecialization =
			specializations.find(({ id }) => id === DEFAULT_SPECIALIZATION_ID) ??
			specializations[0];

		dispatch(setSpecialization(defaultSpecialization));
	}, [specializations, activeSpecialization, dispatch]);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !specializations) return <div>Ошибка...</div>;

	const items = specializations.map((specialization) => ({
		id: specialization.id,
		title: specialization.title,
		isActive: activeSpecialization?.id === specialization.id,
	}));

	return (
		<FilterBase
			title='Специализации'
			items={items}
			maxVisible={2}
			showAll={showAll}
			onToggleShowAll={() => dispatch(toggleShowAllSpecializations())}
			onItemClick={(id) => {
				const specialization = specializations.find((item) => item.id === id);
				if (specialization) {
					dispatch(setSpecialization(specialization));
				}
			}}
		/>
	);
};

export default SpecializationFilter;
