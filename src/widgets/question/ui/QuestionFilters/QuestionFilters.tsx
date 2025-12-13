import { Search } from '@shared/ui';
import styles from './QuestionFilters.module.css';
import {
	ComplexityFilter,
	RatingFilter,
	SkillsFilter,
	SpecializationFilter,
} from '@features/question/questionFilter';

const QuestionFilters = () => {
	return (
		<aside className={styles.filters}>
			<Search />
			<SpecializationFilter />
			<SkillsFilter />
			<ComplexityFilter />
			<RatingFilter />
		</aside>
	);
};

export default QuestionFilters;
