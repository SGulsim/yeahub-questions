import styles from './QuestionFilters.module.css';
import { Search } from '@shared/index';
import {
	DifficultyFilter,
	RatingFilter,
	SkillsFilter,
	SpecializationFilter,
} from '@features/questionFilter';

const QuestionFilters = () => {
	return (
		<section className={styles.filters}>
			<Search />
			<SpecializationFilter />
			<SkillsFilter />
			<DifficultyFilter />
			<RatingFilter />
		</section>
	);
};

export default QuestionFilters;
