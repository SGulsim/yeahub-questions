import { FilterBase } from '@shared/index';

interface Data {
	id: number;
	name: string;
}

const data: Data[] = [
	{
		id: 1,
		name: 'ux/ui design',
	},
	{
		id: 2,
		name: 'ux/ui design',
	},
	{
		id: 3,

		name: 'ux/ui design',
	},
	{
		id: 4,

		name: 'ux/ui design',
	},
	{
		id: 5,

		name: 'ux/ui design',
	},
	{
		id: 6,
		name: 'ux/ui design',
	},
	{
		id: 7,
		name: 'ux/ui design',
	},
	{
		id: 8,

		name: 'ux/ui design',
	},
	{
		id: 9,
		name: 'ux/ui design',
	},
];

const SkillsFilter = () => {
	return <FilterBase title='Навыки' items={data} isNeedAll />;
};

export default SkillsFilter;
