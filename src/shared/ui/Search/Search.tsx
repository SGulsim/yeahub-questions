import styles from './Search.module.css';
import search from '@shared/assets/search.svg';
import Image from '../Image/Image';

const Search = () => {
	return (
		<div role='img' className={styles.search}>
			<Image src={search} alt={'Поиск вопросов'} />
			<input className={styles.input} placeholder='Введите запрос...' />
		</div>
	);
};

export default Search;
