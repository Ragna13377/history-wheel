import styled from 'styled-components';

type HeaderProps = React.ComponentPropsWithRef<'h1'> & {
	text: string;
};

const StyledH1 = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	color: hsl(var(--accent));
	font-weight: 700;
	font-size: clamp(1.25rem, 0.8rem + 2.25vw, 3.5rem);
	line-height: clamp(1.5rem, 0.95rem + 2.75vw, 4.25rem);
	&:before {
		content: '';
		position: absolute;
		inset-inline-start: 0;
		inset-block-start: 0;
		inline-size: 0.3125rem;
		block-size: 100%;
		background-image: linear-gradient(hsl(var(--accent-start-color)), hsl(var(--accent-end-color)));
	}
	@media (max-width: 1440px) {
		&::before {
			content: none;
		}
	}
`;

export const Header = ({ text, ...props }: HeaderProps) => (
	<StyledH1 {...props}>
		{text.split(' ').map((t) => (
			<span key={t}>{t}</span>
		))}
	</StyledH1>
);
