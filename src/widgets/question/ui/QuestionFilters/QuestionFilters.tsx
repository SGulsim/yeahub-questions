import styles from './QuestionFilters.module.css';
import {
	ComplexityFilter,
	RatingFilter,
	SkillsFilter,
	SpecializationFilter,
	SearchInput,
} from '@features/question/questionFilter';

const QuestionFilters = () => {
	return (
		<aside className={styles.filters}>
			<SearchInput />
			<SpecializationFilter />
			<SkillsFilter />
			<ComplexityFilter />
			<RatingFilter />
		</aside>
	);
};

export default QuestionFilters;
