import { TDirection } from '@shared/ui/NavButton/types';
import { DialProps } from '@entities/Dial/types';
import { getTimeSegments } from '@pages/home/actions';

/**
 * animationDuration in milliseconds
 */
export type FactsWheelProps = {
	timeSegments: Awaited<ReturnType<typeof getTimeSegments>>;
	radius?: number;
	shiftAngle?: number;
	animationDuration?: number;
};

export type FactsWheelUIProps = Omit<DialProps, 'radius' | 'shiftAngle' | 'animationDuration'> &
	Omit<FactsWheelProps, 'timeSegments'> & {
		activeLabel: string;
		startYear: number;
		endYear: number;
		handleNavigation: (direction: TDirection) => void;
	};
