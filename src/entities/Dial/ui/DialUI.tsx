'use client';
import { DialUIProps } from '../types';
import { NavButtonGrow } from '@shared/ui/NavButton';
import { ButtonContainer, StyledDial } from '@entities/Dial/ui/styles';
import { useState } from 'react';

const DialUI = ({ activeButton, buttonAngles, radius, shiftAngle, changeActiveButton }: DialUIProps) => {
	const [rotation, setRotation] = useState(0);
	const rotateDial = (angle: number) => {
		const delta = (angle - shiftAngle + 360) % 360;
		const currentDelta = (angle - shiftAngle + rotation + 360) % 360;
		const newRotation = currentDelta < 180 ? -delta : 360 - delta;
		setRotation(newRotation);
	};
	return (
		<StyledDial radius={radius} $rotation={rotation}>
			{buttonAngles.map((angle, index) => (
				<ButtonContainer key={index} $angle={angle} $rotationFix={rotation} $radius={radius}>
					<NavButtonGrow
						onClick={() => {
							rotateDial(angle);
							changeActiveButton(index + 1);
						}}
					>
						{index + 1}
					</NavButtonGrow>
				</ButtonContainer>
			))}
		</StyledDial>
	);
};

export default DialUI;
