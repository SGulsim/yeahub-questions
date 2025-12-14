import BaseLayout from '@app/layouts/main/ui/BaseLayout';
import { NotFoundPage } from '@pages/NotFoundPage';
import { QuestionDetailPage } from '@pages/questionDetail';
import { QuestionMainPage } from '@pages/questionMain';
import { ErrorFallback } from '@widgets/error';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		errorElement: <ErrorFallback />,
		children: [
			{ index: true, element: <QuestionMainPage /> },
			{ path: '/detail/:questionId', element: <QuestionDetailPage /> },
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
