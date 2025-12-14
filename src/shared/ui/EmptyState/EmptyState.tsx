import styles from './EmptyState.module.css';
import { Button, Image } from '@shared/ui';
import { search } from '@shared/assets';
interface EmptyStateProps {
	title?: string;
	message?: string;
	actionLabel?: string;
	onAction?: () => void;
	icon?: string;
}

const EmptyState = ({
	title = 'Ничего не найдено',
	message = 'Попробуйте изменить параметры поиска',
	actionLabel = 'Сбросить фильтры',
	onAction,
	icon = search,
}: EmptyStateProps) => {
	return (
		<div className={styles.emptyState} role='status'>
			{icon && <Image src={icon} alt='icon' className={styles.icon} />}
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.message}>{message}</p>
			{onAction && (
				<Button type='primary' size='M' state='default' onClick={onAction}>
					{actionLabel}
				</Button>
			)}
		</div>
	);
};

export default EmptyState;
