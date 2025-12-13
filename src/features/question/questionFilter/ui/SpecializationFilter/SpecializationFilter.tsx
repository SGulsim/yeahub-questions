import { FilterBase } from '@shared/ui';

const SpecializationFilter = () => {
	const specializations = [{}];
	return <FilterBase title='Специализация' items={specializations} isNeedAll />;
};

export default SpecializationFilter;
