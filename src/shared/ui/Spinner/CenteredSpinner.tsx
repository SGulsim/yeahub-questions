import styles from './Spinner.module.css';
import Spinner from './Spinner';
interface CenteredSpinnerProps extends React.ComponentProps<typeof Spinner> {
	message?: string;
	fullPage?: boolean;
}

const CenteredSpinner = ({
	message = 'Загрузка...',
	fullPage = false,
	...spinnerProps
}: CenteredSpinnerProps) => {
	return (
		<div
			className={`${styles.centered} ${fullPage ? styles.fullPage : ''}`}
			role='status'
		>
			<div className={styles.centeredContent}>
				<Spinner {...spinnerProps} />
				{message && (
					<span className={`${styles.message} text-16-med`}>{message}</span>
				)}
			</div>
		</div>
	);
};

export default CenteredSpinner;
