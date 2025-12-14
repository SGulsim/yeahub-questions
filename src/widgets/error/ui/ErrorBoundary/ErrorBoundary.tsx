import React from 'react';
import ErrorFallback from '../ErrorFallback/ErrorFallback';
interface ErrorBoundaryProps {
	fallback?: React.ComponentType<{ error?: Error }>;
}
interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}
class ErrorBoundary extends React.Component<
	React.PropsWithChildren<{
		fallback?: React.ComponentType<{ error?: Error }>;
	}>,
	ErrorBoundaryState
> {
	constructor(props: React.PropsWithChildren<ErrorBoundaryProps>) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo);
	}

	resetError = () => {
		this.setState({ hasError: false, error: undefined });
	};

	render() {
		if (this.state.hasError) {
			const FallbackComponent = this.props.fallback || ErrorFallback;
			return (
				<FallbackComponent
					error={this.state.error}
					resetError={this.resetError}
				/>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
