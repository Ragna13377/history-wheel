export type DialProps = {
	buttonsCount: number;
	changeActiveButton: (index: number) => void;
	activeButton: number;
	radius: number;
	shiftAngle: number;
	animationDuration: number;
};

export type DialUIProps = Omit<DialProps, 'buttonsCount' | 'shiftAngle'> & {
	buttonAngles: number[];
	rotation: number;
	rotateDial: (angle: number) => void;
};

export type ButtonContainerProps = {
	$angle: number;
	$rotationFix: number;
	$radius: number;
};
