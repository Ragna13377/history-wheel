'use client';
import { DialProps } from '../types';
import DialUI from '../ui/DialUI';
import { useRotation } from '@entities/Dial/hooks/useRotation';

export const Dial = ({ buttonsCount, shiftAngle, activeButton, ...rest }: DialProps) => {
	const rotation = useRotation({
		buttonsCount,
		shiftAngle,
		activeButton,
	});
	return <DialUI activeButton={activeButton} {...rotation} {...rest} />;
};
