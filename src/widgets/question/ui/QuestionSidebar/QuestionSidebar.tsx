import styles from './QuestionSidebar.module.css';
import { QuestionMeta } from '@entities/question';
import type { PublicQuestion } from '@entities/question/model/types';
import { Button } from '@shared/ui';
interface QuestionSidebarProps {
	question: PublicQuestion;
}

const QuestionSidebar = ({ question }: QuestionSidebarProps) => {
	const { rate, complexity, questionSkills, keywords } = question;

	return (
		<div className={styles.sidebar}>
			<span className={`${styles.title} text-16-med`}>Уровень:</span>
			<QuestionMeta rate={rate} complexity={complexity} />

			<span className={`${styles.title} text-16-med`}>Навыки:</span>
			<div className={styles.btns}>
				{questionSkills?.map(({ id, title }) => (
					<Button key={id} type='skill' size={'M'} state={'default'} isActive>
						{title}
					</Button>
				))}
			</div>

			<span className={`${styles.title} text-16-med`}>Ключевые слова:</span>
			<div className={styles.keywords}>
				{keywords?.map((keyword) => (
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
		</div>
	);
};

export default QuestionSidebar;
