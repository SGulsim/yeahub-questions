import styles from './Article.module.css';
import type { ReactNode } from 'react';

interface ArticleProps {
	type: 'brief' | 'short' | 'long';
	children: ReactNode;
}

const Article = ({ type, children }: ArticleProps) => {
	return (
		<article className={`${type === 'brief' ? styles.brief : styles.content}`}>
			{children}
		</article>
	);
};

export default Article;
