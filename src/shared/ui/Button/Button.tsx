import styles from './Button.module.css';
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

type ButtonType = 'primary' | 'link' | 'skill' | 'pagination';
type ButtonSize = 'M' | 'L';
type ButtonState = 'default' | 'disabled';
interface ButtonProps
	extends Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		'type' | 'children' | 'onClick'
	> {
	children: ReactNode;
	type: ButtonType;
	size?: ButtonSize;
	state?: ButtonState;
	disabled?: boolean;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	isActive?: boolean;
}

const getButtonClasses = (
	buttonType: ButtonType,
	size: ButtonSize,
	isDisabled: boolean,
	isActive?: boolean,
	className?: string
): string => {
	const classes: string[] = [styles.button];

	if (buttonType === 'primary') classes.push(styles.primary);
	if (buttonType === 'link') classes.push(styles.link, 'text-14-reg');
	if (buttonType === 'skill') classes.push(styles.skill, 'text-16-med');
	if (buttonType === 'pagination') classes.push(styles.pagination);

	if (size === 'M') classes.push(styles.sizeM);
	if (size === 'L') classes.push(styles.sizeL);

	if (isDisabled) classes.push(styles.disabled);

	if (buttonType === 'pagination' && isActive) {
		classes.push(styles.paginationActive);
		const disabledIndex = classes.indexOf(styles.disabled);
		if (disabledIndex > -1) {
			classes.splice(disabledIndex, 1);
		}
	}

	if (buttonType === 'skill' && isActive) classes.push(styles.skillActive);

	if (className) classes.push(className);

	return classes.filter(Boolean).join(' ');
};

const Button = ({
	type: buttonType,
	size = 'M',
	state = 'default',
	disabled = false,
	children,
	onClick,
	isActive,
	className,
	...rest
}: ButtonProps) => {
	const isDisabled = disabled || state === 'disabled';

	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		if (isDisabled) return;
		onClick?.(event);
	};

	const buttonClasses = getButtonClasses(
		buttonType,
		size,
		isDisabled,
		isActive,
		className
	);

	return (
		<button
			onClick={handleClick}
			className={buttonClasses}
			disabled={isDisabled}
			type='button'
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
