import { FilterBase } from '@shared/ui/index';
import { ratingButtons } from '../../model/constants';

const RatingFilter = () => {
	return <FilterBase title={'Рейтинг'} items={ratingButtons} />;
};

export default RatingFilter;
