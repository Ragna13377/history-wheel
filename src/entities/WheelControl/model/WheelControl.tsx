'use client';
import { WheelControlProps } from '../types';
import { useRotation } from '../hooks/useRotation';
import WheelControlUI from '../ui/WheelControlUI';

export const WheelControl = ({
	buttonsCount,
	shiftAngle,
	activeButton,
	...rest
}: WheelControlProps) => {
	const rotation = useRotation({
		buttonsCount,
		shiftAngle,
		activeButton,
	});
	return <WheelControlUI activeButton={activeButton} {...rotation} {...rest} />;
};
