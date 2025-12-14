export interface ApiResponse<T> {
	page: number;
	total: number;
	limit: number;
	data: T[];
}
export interface FilterItem {
	id: number;
	title: string;
	isActive?: boolean;
}
export interface FilterBaseProps {
	title: string;
	items: FilterItem[];
	maxVisible?: number;
	showAll?: boolean;
	onToggleShowAll?: () => void;
	onItemClick?: (id: FilterItem['id']) => void;
}
