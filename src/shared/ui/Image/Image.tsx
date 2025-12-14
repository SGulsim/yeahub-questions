import styles from './Image.module.css';

interface ImageProps {
	src?: string;
	alt?: string;
	className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
	return <img src={src} alt={alt} className={`${styles.image} ${className}`} />;
};

export default Image;
