import { useCallback, useEffect, useState } from 'react';
import { defaultShiftAngle } from '@entities/Dial/constants';
import { DialProps } from '@entities/Dial/types';

export const useRotation = ({
	buttonsCount,
	shiftAngle,
	activeButton,
}: Omit<DialProps, 'radius' | 'changeActiveButton' | 'animationDuration'>) => {
	const buttonAngles = Array.from(
		{ length: buttonsCount },
		(_, ind) => (360 / buttonsCount) * ind + defaultShiftAngle
	);
	const [rotation, setRotation] = useState(0);
	const rotateDial = useCallback(
		(angle: number) => {
			const currentRotation = rotation;
			const targetRotation = (shiftAngle - angle + 360) % 360;
			const delta = (targetRotation - currentRotation + 360) % 360;
			const newRotation = delta > 180 ? delta - 360 : delta;
			setRotation((prevRotation) => prevRotation + newRotation);
		},
		[shiftAngle, rotation]
	);
	useEffect(() => {
		rotateDial(buttonAngles[activeButton]);
	}, [activeButton, buttonAngles, rotateDial]);

	return {
		buttonAngles,
		rotation,
		rotateDial,
	};
};
