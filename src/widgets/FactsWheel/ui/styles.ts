import styled from 'styled-components';

export const StyledTimeTicker = styled.div<{ radius: number }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	inline-size: calc(${({ radius }) => radius}px + var(--year-ticker-font-size) * 2.25);
	position: absolute;
	inset-inline-start: 50%;
	inset-block-start: 50%;
	transform: translate(-50%, -50%);
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

export const StyledLabel = styled.span`
	position: absolute;
	inset-block-start: 0;
	inset-inline-start: 0;
`;
