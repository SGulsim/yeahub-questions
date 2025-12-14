import {
	useAppDispatch,
	useAppSelector,
} from '@app/providers/store/configs/hooks';
import { useFetchSkillsQuery } from '@entities/skills/api/skillsApi';
import { CenteredSpinner, EmptyState, FilterBase, Spinner } from '@shared/ui';
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
		isFetching,
	} = useFetchSkillsQuery(
		{
			specializationId: activeSpecialization?.id ?? 0,
		},
		{
			skip: !activeSpecialization,
		}
	);

	if (!activeSpecialization) return <Spinner />;
	if (isLoading || isFetching) return <Spinner />;

	if (!skills || skills.length === 0)
		return (
			<EmptyState
				title='Навыки не найдены'
				message='Попробуйте перезагрузить страницу'
				actionLabel='Перезагрузить'
				onAction={() => window.location.reload()}
			/>
		);

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
