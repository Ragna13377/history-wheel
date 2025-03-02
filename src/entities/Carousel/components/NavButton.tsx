import styled from 'styled-components';
import { TDirection } from '@shared/types';

type NavigationProps = {
	direction: TDirection;
	showButton: boolean;
};

const StyledNavCarousel = styled.div<{ $direction: TDirection }>`
	height: 100%;
	width: 2.5rem;
	top: 1.25rem;
	background: white;
	@media (max-width: 1024px) {
		display: none;
	}
	&:before {
		inline-size: 2.5rem;
		block-size: 2.5rem;
		box-shadow: 0px 0px 0.9375rem 0px hsla(219, 84%, 58%, 0.1);
		border-radius: 50%;
	}
	${({ $direction }) => ($direction === 'forward' ? 'right: 0;' : 'left: 0;')}
	${({ $direction }) =>
		$direction &&
		`
		 &:after {
			content: '';
			border: 0.125rem solid hsla(219, 84%, 58%, 1);
			border-width: 0 0.1875rem 0.1875rem 0;
			display: inline-block;
			padding: 0.25rem;
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: ${$direction === 'back' ? '55%' : '45%'};
      transform-origin: center;
			transform: translate(-50%, -50%) rotate(${$direction === 'back' ? '135deg' : '-45deg'});
		}
	 `}
`;

const NavButton = ({ direction, showButton }: NavigationProps) => (
	<StyledNavCarousel
		$direction={direction}
		style={{ visibility: showButton ? 'visible' : 'hidden' }}
		className={direction === 'forward' ? 'swiper-button-next' : 'swiper-button-prev'}
	/>
);

export default NavButton;
