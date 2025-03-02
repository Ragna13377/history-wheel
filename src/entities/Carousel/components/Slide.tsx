import styled from 'styled-components';
import { Bebas_Neue } from 'next/font/google';

type SlideProps = React.ComponentPropsWithRef<'div'> & {
	title: string;
	description: string;
};

const StyledSlide = styled.div`
	min-inline-size: clamp(10.375rem, 8.45rem + 9.625vw, 20rem);
	min-block-size: clamp(7.125rem, 6.8625rem + 1.3125vw, 8.4375rem);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 0.9375rem;
	cursor: grab;
`;

const StyledTitle = styled.h2`
	font-size: clamp(1rem, 0.8875rem + 0.5625vw, 1.5625rem);
	font-weight: 400;
	line-height: clamp(1.2rem, 1.065rem + 0.675vw, 1.875rem);
	color: hsla(219, 84%, 58%, 1);
`;

const StyledDescription = styled.p`
	font-size: clamp(0.875rem, 0.8rem + 0.375vw, 1.25rem);
	font-weight: 400;
	line-height: clamp(1.25rem, 1.125rem + 0.625vw, 1.875rem);
	color: hsl(var(--accent));
`;

const bebasNeue = Bebas_Neue({
	variable: '--font-bebas-neue',
	subsets: ['latin'],
	weight: '400',
	display: 'swap',
});

const Slide = ({ title, description, ...rest }: SlideProps) => (
	<StyledSlide {...rest}>
		<StyledTitle className={bebasNeue.className}>{title}</StyledTitle>
		<StyledDescription>{description}</StyledDescription>
	</StyledSlide>
);

export default Slide;
