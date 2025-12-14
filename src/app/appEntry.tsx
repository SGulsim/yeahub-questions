import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/normalize.css';
import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/providers/router/configs/routerConfig';
import { Provider } from 'react-redux';
import { store } from './providers/store/configs/store';
import ErrorBoundary from '@widgets/error/ui/ErrorBoundary/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ErrorBoundary>
	</StrictMode>
);
