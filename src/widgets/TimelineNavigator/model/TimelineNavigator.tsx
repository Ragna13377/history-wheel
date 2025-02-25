'use client';
import TimelineNavigatorUI from '../ui/TimelineNavigatorUI';
import { useWheelNavigation } from '../hooks/useWheelNavigation';
import { TimelineNavigatorProps } from '../types';

export const TimelineNavigator = ({ timeSegments, ...props }: TimelineNavigatorProps) => {
	const wheelNavigation = useWheelNavigation({ timeSegments });
	return <TimelineNavigatorUI buttonsCount={timeSegments.length} {...wheelNavigation} {...props} />;
};
