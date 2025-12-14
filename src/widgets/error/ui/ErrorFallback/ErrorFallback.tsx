import styles from './ErrorFallback.module.css';
import { Button } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

interface ErrorFallbackProps {
	error?: Error;
	resetError?: () => void;
}

const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/');
		resetError?.();
	};

	const handleReload = () => {
		window.location.reload();
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Что-то пошло не так</h1>
				<p className={`${styles.message} text-20-reg`}>
					Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз.
				</p>

				{error && (
					<details className={styles.details}>
						<summary>Подробности ошибки</summary>
						<pre className={styles.error}>{error.message}</pre>
					</details>
				)}

				<div className={styles.actions}>
					<Button
						type='primary'
						size='M'
						state='default'
						onClick={handleReload}
					>
						Перезагрузить
					</Button>
					<Button type='link' size='M' state='default' onClick={handleGoHome}>
						На главную
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ErrorFallback;
