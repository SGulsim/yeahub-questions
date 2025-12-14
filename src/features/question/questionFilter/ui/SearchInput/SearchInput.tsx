import styles from './SearchInput.module.css';
import { Image } from '@shared/ui';
import { search } from '@shared/assets';
import { useEffect, useState } from 'react';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import { setSearch } from '../../model/filterSlice';
import { selectKeywords } from '../../model/filterSelectors';

const SearchInput = () => {
	const dispatch = useAppDispatch();
	const keywords = useAppSelector(selectKeywords);

	const [value, setValue] = useState(keywords[0] || '');
	const debouncedValue = useDebounce(value);

	useEffect(() => {
		setValue(keywords[0] || '');
	}, [keywords]);

	useEffect(() => {
		if (debouncedValue !== (keywords[0] || '')) {
			dispatch(setSearch(debouncedValue));
		}
	}, [debouncedValue, dispatch]);

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
