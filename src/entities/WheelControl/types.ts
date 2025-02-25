export type WheelControlProps = React.ComponentPropsWithRef<'div'> & {
	buttonsCount: number;
	activeButton: number;
	changeActiveButton: (index: number) => void;
	labels: string[];
	shiftAngle: number;
	$diameter: number;
	$animationDuration: number;
};

export type WheelControlUIProps = Omit<WheelControlProps, 'buttonsCount' | 'shiftAngle'> & {
	buttonAngles: number[];
	rotateDial: (angle: number) => void;
	$rotation: number;
};

export type ButtonContainerProps = {
	$angle: number;
	$rotationFix: number;
	$diameter: number;
	$animationDuration: number;
};
