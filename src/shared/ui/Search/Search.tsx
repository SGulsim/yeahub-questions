import { search } from '@shared/assets';
import Image from '../Image/Image';
import styles from './Search.module.css';

const Search = () => {
	return (
		<div role='img' className={styles.search}>
			<Image src={search} alt={'Поиск вопросов'} />
			<input className={styles.input} placeholder='Введите запрос...' />
		</div>
	);
};

export default Search;
