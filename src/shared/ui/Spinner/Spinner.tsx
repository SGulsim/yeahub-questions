import styles from './Spinner.module.css';

interface SpinnerProps {
	size?: 'sm' | 'md' | 'lg';
	color?: 'primary' | 'white' | 'black';
}

const Spinner = ({ size = 'md', color = 'primary' }: SpinnerProps) => {
	return (
		<div
			className={`
        ${styles.spinner} 
        ${styles[size]} 
        ${styles[color]}
      `}
			role='status'
			aria-label='Загрузка'
		>
			Загрузка...
		</div>
	);
};

export default Spinner;
