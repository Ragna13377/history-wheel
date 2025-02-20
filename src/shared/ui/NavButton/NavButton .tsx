import styled, { css, keyframes } from 'styled-components';

type ButtonProps = React.ComponentPropsWithRef<'button'> & {
	direction?: 'left' | 'right';
	$dotAnimation?: boolean;
};

const expandAnimation = keyframes`
  0% {
    transform: scale(0.12);
    background: hsla(219, 30%, 37%, 1);
  }
  100% {
    transform: scale(1);
    background: white;
  }
`;

const StyledButton = styled.button<ButtonProps>`
	width: 50px;
	height: 50px;
	border: 1px solid hsla(238, 30%, 37%, 0.5);
	background: white;
	border-radius: 50%;
	position: relative;
	${({ direction }) =>
		direction &&
		`
		 &:before {
			content: '';
			border: solid hsl(219, 30%, 37%);
			border-width: 0 3px 3px 0;
			display: inline-block;
			padding: 4px;
      position: absolute;
      top: 50%;
      left: ${direction === 'left' ? '55%' : '45%'};
      transform-origin: center;
			transform: translate(-50%, -50%) rotate(${direction === 'left' ? '135deg' : '-45deg'});
		}
	 `}
	${({ $dotAnimation }) =>
		$dotAnimation &&
		css`
			background: hsla(219, 30%, 37%, 1);
			transform: scale(0.12);
			&:hover {
				animation: ${css`
						${expandAnimation}`} 0.3s ease-out forwards;
			}
		`}
`;

export const NavButton = (props: ButtonProps) => <StyledButton {...props} />;
