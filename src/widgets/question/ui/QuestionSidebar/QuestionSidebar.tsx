import styles from './QuestionSidebar.module.css';
import { QuestionMeta } from '@entities/question';
import { useQuestionById } from '@features/question/hooks/useQuestionById';
import { Button } from '@shared/ui/index';

interface QuestionSidebarProps {
	questionId: string;
}

const QuestionSidebar = ({ questionId }: QuestionSidebarProps) => {
	const { question, isLoading, isError } = useQuestionById(questionId);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError) return <div>Ошибка...</div>;

	return (
		<section className={styles.sidebar}>
			<span className={`${styles.title} text-16-med`}>Уровень:</span>
			<QuestionMeta rate={question.rate} complexity={question.complexity} />

			<span className={`${styles.title} text-16-med`}>Навыки:</span>
			<div className={styles.btns}>
				{question.questionSkills?.map(({ id, title }) => (
					<Button key={id} type='skill' size={'M'} state={'default'} isActive>
						{title}
					</Button>
				))}
			</div>

			<span className={`${styles.title} text-16-med`}>Ключевые слова:</span>
			<div className={styles.keywords}>
				{question.keywords?.map((keyword) => (
					<Button
						key={keyword}
						type={'link'}
						size={'L'}
						state={'default'}
						isActive
					>
						#{keyword}
					</Button>
				))}
			</div>
		</section>
	);
};

export default QuestionSidebar;
