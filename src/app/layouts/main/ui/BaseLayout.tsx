import styles from './BaseLayout.module.css';
import { Header } from '@widgets/header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<Outlet />
			</div>
		</>
	);
};

export default BaseLayout;
