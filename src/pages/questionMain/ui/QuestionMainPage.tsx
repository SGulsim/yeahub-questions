import {
	QuestionFiltersSkeleton,
	QuestionListSkeleton,
} from '@widgets/question';
import styles from './QuestionMainPage.module.css';
import { Suspense, lazy } from 'react';

const LazyQuestionList = lazy(() =>
	import('@widgets/question').then((module) => ({
		default: module.QuestionList,
	}))
);
const LazyQuestionFilters = lazy(() =>
	import('@widgets/question').then((module) => ({
		default: module.QuestionFilters,
	}))
);

const QuestionMainPage = () => {
	return (
		<main className={styles.content}>
			<Suspense fallback={<QuestionListSkeleton />}>
				<LazyQuestionList />
			</Suspense>
			<Suspense fallback={<QuestionFiltersSkeleton />}>
				<LazyQuestionFilters />
			</Suspense>
		</main>
	);
};

export default QuestionMainPage;
