import styled from 'styled-components';
import { CenteredContainer } from '@shared/ui/CenteredContainer';
import { NavButton } from '@shared/ui/NavButton';

export const StyledYearRangeContainer = styled.div<{ $diameter: number }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	inline-size: calc(${({ $diameter }) => $diameter}px + var(--year-ticker-font-size) * 2.25);
	margin: 0 auto;
	padding-block: 56px;
	font-size: var(--year-ticker-font-size);
	font-weight: 700;
	line-height: clamp(4.5rem, 3.4rem + 5.5vw, 10rem);
	letter-spacing: calc(0.02 * var(--year-ticker-font-size));
	text-align: center;
	pointer-events: none;
	@media (max-width: 1024px) {
		inline-size: 100%;
		margin: 0 auto;
		border-block-end: 1px solid hsla(220, 19%, 82%, 1);
	}
	& > *:nth-child(1) {
		color: hsl(var(--accent-start-color));
	}
	& > *:nth-child(2) {
		color: hsl(var(--accent-end-color));
	}
`;

export const StyledNavigation = styled.div<{ $diameter: number }>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: clamp(0.625rem, 0.5rem + 0.625vw, 1.25rem);
	padding-inline-start: var(--page-offset);
	margin-block-start: ${({ $diameter }) => $diameter / 4}px;
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.2;
	@media (max-width: 1024px) {
		position: fixed;
		inset-inline-start: 0;
		inset-block-end: 1.25rem;
	}
`;

export const StyledControls = styled.div`
	display: flex;
	gap: clamp(0.625rem, 0.5rem + 0.625vw, 1.25rem);
`;

export const StyledWheelWrapper = styled.div`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		background-color: hsl(var(--accent));
		z-index: -100;
		block-size: 1px;
		inline-size: 100%;
		inset-block-start: 50%;
		inset-inline-start: 0;
	}
	@media (max-width: 1024px) {
		inline-size: 100%;
		padding-inline: var(--page-offset);
		&:after {
			content: none;
		}
	}
`;

export const StyledCenteredContainer = styled(CenteredContainer)`
	@media (max-width: 1024px) {
		display: none;
	}
`;

export const StyledNavButton = styled(NavButton)`
	inline-size: clamp(1.5625rem, 1.25rem + 1.5625vw, 3.125rem);
	block-size: clamp(1.5625rem, 1.25rem + 1.5625vw, 3.125rem);
	&:before {
		border-width: 0 clamp(0.125rem, 0.1125rem + 0.0625vw, 0.1875rem)
			clamp(0.125rem, 0.1125rem + 0.0625vw, 0.1875rem) 0;
		padding: clamp(0.125rem, 0.1rem + 0.125vw, 0.25rem);
	}
`;
