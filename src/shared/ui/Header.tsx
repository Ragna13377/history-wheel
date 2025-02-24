import styled from 'styled-components';

type HeaderProps = React.ComponentPropsWithRef<'h1'> & {
	text: string;
};

const StyledH1 = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-inline-start: var(--h1-offset);
	position: relative;
	color: hsl(var(--accent));
	font-weight: 700;
	font-size: 56px;
	line-height: 68px;
	&:before {
		content: '';
		position: absolute;
		inset-inline-start: calc(-1 * var(--h1-offset));
		inset-block-start: 0;
		inline-size: 5px;
		block-size: 100%;
		background-image: linear-gradient(
			hsl(var(--accent-start-color)),
			hsl(var(--accent-end-color))
		);
	}
`;

export const Header = ({ text, ...props }: HeaderProps) => (
	<StyledH1 {...props}>
		{text.split(' ').map((t) => (
			<span key={t}>{t}</span>
		))}
	</StyledH1>
);
