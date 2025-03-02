import styled from 'styled-components';
import { NavButtonProps } from '@shared/ui/NavButton/types';

const StyledButton = styled.button<NavButtonProps>`
	inline-size: 3.125rem;
	block-size: 3.125rem;
	position: relative;
	border: 0.0625rem solid hsla(238, 30%, 37%, 0.5);
	border-radius: 50%;
	background: white;

	${({ direction }) =>
		direction &&
		`
		 &:before {
			content: '';
			border: solid hsl(219, 30%, 37%);
			border-width: 0 0.1875rem 0.1875rem 0;
			display: inline-block;
			padding: 0.25rem;
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: ${direction === 'back' ? '55%' : '45%'};
      transform-origin: center;
			transform: translate(-50%, -50%) rotate(${direction === 'back' ? '135deg' : '-45deg'});
		}
	 `}
`;

export const NavButton = (props: NavButtonProps) => <StyledButton {...props} />;
