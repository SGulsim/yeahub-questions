import { difficultyButtons } from '@features/questionFilter/model/constants';
import { FilterBase } from '@shared/index';

const DifficultyFilter = () => {
	return <FilterBase title={'Уровень сложности'} items={difficultyButtons} />;
};

export default DifficultyFilter;
