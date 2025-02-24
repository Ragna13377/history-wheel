import styled, { css, keyframes } from 'styled-components';
import { NavButtonGrowProps } from '@shared/ui/NavButton/types';
import { NavButton } from '@shared/ui/NavButton/NavButton ';

const growAnimation = keyframes`
  0% {
    transform: scale(0.12);
    background: hsla(219, 30%, 37%, 1);
  }
  100% {
    transform: scale(1);
    background: white;
  }
`;

const ButtonWrapper = styled.div<Pick<NavButtonGrowProps, '$isActive'>>`
  inline-size: 50px;
	block-size: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;

	button {
		background: hsla(219, 30%, 37%, 1);
		transform: scale(0.12);
	}
	&:hover button {
		animation: ${css`
				${growAnimation}`} 0.3s ease-out forwards;
	}
	${({ $isActive }) =>
		$isActive &&
		css`
			button {
				animation: ${css`
						${growAnimation}`} 0.3s ease-out forwards;
			}
		`}
`;

export const NavButtonGrow = ({
	$isActive = false,
	containerProps,
	...buttonProps
}: NavButtonGrowProps) => (
	<ButtonWrapper $isActive={$isActive} {...containerProps}>
		<NavButton {...buttonProps} />
	</ButtonWrapper>
);
