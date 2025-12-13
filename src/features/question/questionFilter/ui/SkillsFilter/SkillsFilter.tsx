import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import { useFetchSkillsQuery } from '@entities/skills/api/skillsApi';
import { FilterBase } from '@shared/ui';
import {
	selectShowAllSkills,
	selectSkillsFilter,
	selectActiveSpecialization,
} from '../../model/filterSelectors';
import { toggleShowAllSkills, selectSkill } from '../../model/filterSlice';

const SkillsFilter = () => {
	const selectedSkills = useAppSelector(selectSkillsFilter);
	const showAll = useAppSelector(selectShowAllSkills);
	const activeSpecialization = useAppSelector(selectActiveSpecialization);
	const dispatch = useAppDispatch();

	const {
		data: skills,
		isLoading,
		isError,
	} = useFetchSkillsQuery(
		{
			specializationId: activeSpecialization?.id ?? 0,
		},
		{
			skip: !activeSpecialization,
		}
	);

	if (!activeSpecialization) {
		return <div>Загрузка...</div>;
	}

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !skills) return <div>Ошибка...</div>;

	const items = skills.map((skill) => ({
		id: skill.id,
		title: skill.title,
		isActive: selectedSkills.some(({ id }) => id === skill.id),
	}));

	return (
		<FilterBase
			title='Навыки'
			items={items}
			maxVisible={3}
			showAll={showAll}
			onToggleShowAll={() => dispatch(toggleShowAllSkills())}
			onItemClick={(id) => {
				const skill = skills.find((item) => item.id === id);
				if (skill) {
					dispatch(selectSkill(skill));
				}
			}}
		/>
	);
};

export default SkillsFilter;
