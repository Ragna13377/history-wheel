import { TDirection } from '@shared/ui/NavButton/types';
import { WheelControlProps } from '@entities/WheelControl/types';
import { getTimeSegments } from '@pages/home/actions';

/**
 * animationDuration in milliseconds
 */
export type TimelineNavigatorProps = {
	timeSegments: Awaited<ReturnType<typeof getTimeSegments>>;
	diameter?: number;
	shiftAngle?: number;
	animationDuration?: number;
};

export type TimelineNavigatorUIProps = Omit<
	WheelControlProps,
	'$diameter' | 'shiftAngle' | '$animationDuration'
> &
	Omit<TimelineNavigatorProps, 'timeSegments'> & {
		startYear: number;
		endYear: number;
		handleNavigation: (direction: TDirection) => void;
	};
