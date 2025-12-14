import styles from './NotFoundPage.module.css';
import { Button } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/');
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					404
					<br /> Страница не найдена
				</h1>
				<div className={styles.actions}>
					<Button
						type='primary'
						size='M'
						state='default'
						onClick={handleGoHome}
					>
						На главную
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
