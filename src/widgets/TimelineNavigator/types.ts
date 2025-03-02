import { TDirection } from '@shared/types';
import { CarouselProps } from '@entities/Carousel/types';
import { WheelControlProps } from '@entities/WheelControl/types';
import { TimeSegmentsSchemaProps } from '@pages/home/shema';

/**
 * animationDuration in milliseconds
 */
export type TimelineNavigatorProps = {
	timeSegments: TimeSegmentsSchemaProps[];
	diameter?: number;
	shiftAngle?: number;
	animationDuration?: number;
};

export type TimelineNavigatorUIProps = CarouselProps &
	Omit<WheelControlProps, '$diameter' | 'shiftAngle' | '$animationDuration'> &
	Omit<TimelineNavigatorProps, 'timeSegments'> & {
		startYear: number;
		endYear: number;
		handleNavigation: (direction: TDirection) => void;
	};
