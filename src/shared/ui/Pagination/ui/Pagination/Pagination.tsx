import type { PaginationProps } from '../../model/types';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

interface Props {
	top?: boolean;
	bottom?: boolean;
}

export default function Pagination({
	top,
	bottom,
	...paginationProps
}: Props & PaginationProps) {
	return (
		<>
			{top && <PaginationButtons {...paginationProps} />}
			{bottom && <PaginationButtons {...paginationProps} />}
		</>
	);
}
