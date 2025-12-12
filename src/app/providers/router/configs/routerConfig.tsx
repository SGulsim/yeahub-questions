import BaseLayout from '@app/layouts/main/ui/BaseLayout';
import QuestionDetailPage from '@pages/questionDetail';
import QuestionMainPage from '@pages/questionMain';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		children: [
			{ index: true, element: <QuestionMainPage /> },
			{ path: '/detail/:questionId', element: <QuestionDetailPage /> },
		],
	},
]);
