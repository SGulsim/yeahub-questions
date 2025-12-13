import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import { useFetchSkillsQuery } from '@entities/skills/api/skillsApi';
import { FilterBase } from '@shared/ui';
import {
	selectShowAllSkills,
	selectSkillsFilter,
} from '../../model/filterSelectors';
import { toggleShowAllSkills, toggleSkill } from '../../model/filterSlice';

const SkillsFilter = () => {
	const selectedSkills = useAppSelector(selectSkillsFilter);
	const showAll = useAppSelector(selectShowAllSkills);
	const dispatch = useAppDispatch();

	const { data: skills, isLoading, isError } = useFetchSkillsQuery();

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !skills) return <div>Ошибка...</div>;

	const items = skills.map((skill) => ({
		id: skill.id,
		title: skill.title,
		isActive: selectedSkills.includes(skill.id),
	}));

	return (
		<FilterBase
			title='Навыки'
			items={items}
			maxVisible={3}
			showAll={showAll}
			onToggleShowAll={() => dispatch(toggleShowAllSkills())}
			onItemClick={(id) => dispatch(toggleSkill(id))}
		/>
	);
};

export default SkillsFilter;
