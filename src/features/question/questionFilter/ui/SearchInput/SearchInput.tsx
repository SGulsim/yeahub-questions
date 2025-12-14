import styles from './SearchInput.module.css';
import { Image } from '@shared/ui';
import { search } from '@shared/assets';
import { useEffect, useState } from 'react';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { useAppDispatch } from '@app/providers/store/configs/hooks';
import { setSearch } from '../../model/filterSlice';

const SearchInput = () => {
	const [value, setValue] = useState('');
	const debouncedValue = useDebounce(value);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setSearch(debouncedValue));
	}, [debouncedValue]);

	return (
		<div className={styles.search}>
			<Image src={search} alt={'Поиск вопросов'} />
			<input
				className={styles.input}
				type={'text'}
				placeholder='Введите запрос...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
