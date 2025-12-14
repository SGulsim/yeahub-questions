import type { RootState } from '@app/providers/store/configs/store';

export const selectQuestionsPage = (state: RootState) =>
	state.questionsPage.page;
