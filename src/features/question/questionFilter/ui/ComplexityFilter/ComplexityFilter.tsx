import { FilterBase } from '@shared/ui/index';
import { difficultyButtons } from '../../model/constants';

const ComplexityFilter = () => {
	return <FilterBase title={'Уровень сложности'} items={difficultyButtons} />;
};

export default ComplexityFilter;
