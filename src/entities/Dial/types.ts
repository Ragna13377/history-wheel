export type DialProps = {
	buttonsCount: number;
	changeActiveButton: (index: number) => void;
	activeButton: number;
	radius?: number;
	shiftAngle?: number;
};

export type DialUIProps = Pick<DialProps, 'changeActiveButton' | 'activeButton'> & {
	buttonAngles: number[];
	radius: number;
	shiftAngle: number;
};

export type ButtonContainerProps = {
	$angle: number;
	$rotationFix: number;
	$radius: number;
};
