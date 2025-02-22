import { DialProps } from '../types';
import DialUI from '../ui/DialUI';
import { defaultRadius, defaultShiftAngle } from '../constants';

export const Dial = ({ buttonsCount, radius = defaultRadius, shiftAngle = defaultShiftAngle, ...rest }: DialProps) => {
	const buttonAngles = Array.from(
		{ length: buttonsCount },
		(_, ind) => (360 / buttonsCount) * ind + defaultShiftAngle
	);
	return <DialUI buttonAngles={buttonAngles} radius={radius} shiftAngle={shiftAngle} {...rest} />;
};
