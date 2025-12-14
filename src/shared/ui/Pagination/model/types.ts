export interface PaginationProps {
	handleNextPage: () => void;
	handlePreviousPage: () => void;
	handlePageClick: (page: number) => void;
	currentPage: number;
	totalPages: number;
}
