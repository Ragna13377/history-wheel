import styled from 'styled-components';

export const StyledYearRangeContainer = styled.div<{ $diameter: number }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	inline-size: calc(${({ $diameter }) => $diameter}px + var(--year-ticker-font-size) * 2.25);
	font-size: var(--year-ticker-font-size);
	font-weight: 700;
	line-height: 160px;
	letter-spacing: calc(0.02 * var(--year-ticker-font-size));
	text-align: center;
	pointer-events: none;

	& > *:nth-child(1) {
		color: hsl(var(--accent-start-color));
	}
	& > *:nth-child(2) {
		color: hsl(var(--accent-end-color));
	}
`;