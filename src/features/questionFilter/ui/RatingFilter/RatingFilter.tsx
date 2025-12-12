import { ratingButtons } from '@features/questionFilter/model/constants';
import { FilterBase } from '@shared/index';

const RatingFilter = () => {
	return <FilterBase title={'Рейтинг'} items={ratingButtons} />;
};

export default RatingFilter;
