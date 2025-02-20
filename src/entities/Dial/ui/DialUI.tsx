import React from 'react';
import { ButtonPositoinProps, DialUIProps } from '../types';
import styled from 'styled-components';
import { NavButton } from '@shared/ui/NavButton';

const StyledDial = styled.div<Pick<DialUIProps, 'radius'>>`
	border: 1px solid hsla(var(--accent));
	border-radius: 50%;
	inline-size: ${({ radius }) => radius}px;
	block-size: ${({ radius }) => radius}px;
	aspect-ratio: 1/1;
`;

const StyledButtonPosition = styled(NavButton)<ButtonPositoinProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(${({ angle }) => angle}deg)
		translateY(-${({ radius }) => radius / 2}px);
	transform-origin: center;
`;

const DialUI = ({ buttonAngles, radius }: DialUIProps) => (
	<StyledDial radius={radius}>
		{buttonAngles.map((angle, index) => (
			<StyledButtonPosition key={index} angle={angle} radius={radius} $dotAnimation>
				{index + 1}
			</StyledButtonPosition>
		))}
	</StyledDial>
);

export default DialUI;
