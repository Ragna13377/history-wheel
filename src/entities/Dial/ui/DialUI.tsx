'use client';
import { DialUIProps } from '../types';
import { NavButtonGrow } from '@shared/ui/NavButton';
import { ButtonContainer, StyledDial } from '@entities/Dial/ui/styles';
import { useState } from 'react';

const DialUI = ({ activeButton, buttonAngles, radius, shiftAngle, changeActiveButton }: DialUIProps) => {
	const [rotation, setRotation] = useState(0);
	const rotateDial = (angle: number) => {
		const currentRotation = rotation;
		const targetRotation = (shiftAngle - angle + 360) % 360;
		const delta = (targetRotation - currentRotation + 360) % 360;
		const newRotation = delta > 180 ? delta - 360 : delta;
		console.log(rotation + newRotation)
		setRotation((prevRotation) => prevRotation + newRotation);
	};
	return (
		<StyledDial radius={radius} $rotation={rotation}>
			{buttonAngles.map((angle, index) => (
				<ButtonContainer key={index} $rotationFix={rotation} $angle={angle} $radius={radius}>
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
