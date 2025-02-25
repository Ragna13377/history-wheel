import { useCallback, useEffect, useState } from 'react';
import { defaultShiftAngle } from '../constants';
import { WheelControlProps } from '../types';

export const useRotation = ({
	buttonsCount,
	shiftAngle,
	activeButton,
}: Omit<
	WheelControlProps,
	'$diameter' | 'changeActiveButton' | '$animationDuration' | 'labels'
>) => {
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
		$rotation: rotation,
		rotateDial,
	};
};
