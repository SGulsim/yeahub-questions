import styles from './Button.module.css';
import type { ReactNode } from 'react';

type ButtonType = 'primary' | 'link';
type ButtonSize = 'M' | 'L';
type ButtonState = 'default' | 'disabled';

interface ButtonProps {
	children: ReactNode;
	type: ButtonType;
	size: ButtonSize;
	state: ButtonState;
}

const getButtonClasses = (
	type: ButtonType,
	size: ButtonSize,
	state: ButtonState
): string => {
	const classMap = {
		button: styles.button,
		primary: type === 'primary' ? styles.primary : '',
		link: type === 'link' ? styles.link : '',
		sizeM: size === 'M' ? styles.sizeM : '',
		sizeL: size === 'L' ? styles.sizeL : '',
		disabled: state === 'disabled' ? styles.disabled : '',
	};

	return Object.values(classMap).filter(Boolean).join(' ');
};

const Button = ({ type, size, state, children }: ButtonProps) => {
	const buttonClasses = getButtonClasses(type, size, state);

	return (
		<button className={buttonClasses} disabled={state === 'disabled'}>
			{children}
		</button>
	);
};

export default Button;
