import { Button, Logo } from '@shared/ui';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to={'/'} className={styles.logo}>
				<Logo />
				<h2 className={styles.logoName}>Yeahub</h2>
			</Link>
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
