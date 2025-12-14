import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './styles/normalize.css';
import './styles/index.css';
import { ErrorBoundary } from '@widgets/error';
import { store } from './providers/store';
import { router } from './providers/router';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ErrorBoundary>
	</StrictMode>
);
