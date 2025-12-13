import styles from './Button.module.css';
import type { MouseEventHandler, ReactNode } from 'react';

type ButtonType = 'primary' | 'link' | 'skill';
type ButtonSize = 'M' | 'L';
type ButtonState = 'default' | 'disabled';

interface ButtonProps {
	children: ReactNode;
	type: ButtonType;
	size: ButtonSize;
	state: ButtonState;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	isActive?: boolean;
}

const getButtonClasses = (
	type: ButtonType,
	size: ButtonSize,
	state: ButtonState
): string => {
	const classMap = {
		button: styles.button,
		primary: type === 'primary' ? styles.primary : '',
		link: type === 'link' ? `${styles.link} text-14-reg` : '',
		skill: type === 'skill' ? `${styles.skill} text-16-med` : '',
		sizeM: size === 'M' ? styles.sizeM : '',
		sizeL: size === 'L' ? styles.sizeL : '',
		disabled: state === 'disabled' ? styles.disabled : '',
	};

	return Object.values(classMap).filter(Boolean).join(' ');
};

const Button = ({ type, size, state, children, onClick }: ButtonProps) => {
	const buttonClasses = getButtonClasses(type, size, state);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (state === 'disabled') return;
		onClick?.(e);
	};

	return (
		<button
			onClick={handleClick}
			className={buttonClasses}
			disabled={state === 'disabled'}
		>
			{children}
		</button>
	);
};

export default Button;
