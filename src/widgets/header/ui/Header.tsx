import Button from '@shared/ui/Button/Button';
import styles from './Header.module.css';
import Logo from '@shared/ui/Logo/Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Logo />
				<h2 className={styles.logoName}>Yeahub</h2>
			</div>
			<nav className={styles.navigation}>
				<NavLink to='/base-questions' className='text-16-med'>
					База вопросов
				</NavLink>
				<NavLink to='/trainer' className='text-16-med'>
					Тренажер
				</NavLink>
			</nav>
			<div className={styles.authorization}>
				<Button type={'link'} size={'L'} state={'default'}>
					Вход
				</Button>
				<Button type={'primary'} size={'M'} state={'default'}>
					Регистрация
				</Button>
			</div>
		</header>
	);
};

export default Header;
