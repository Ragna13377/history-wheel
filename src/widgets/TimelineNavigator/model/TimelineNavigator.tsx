'use client';
import TimelineNavigatorUI from '../ui/TimelineNavigatorUI';
import { useNavigator } from '../hooks/useNavigator';
import { TimelineNavigatorProps } from '../types';

export const TimelineNavigator = ({ timeSegments, ...props }: TimelineNavigatorProps) => {
	const wheelNavigation = useNavigator({ timeSegments });
	return <TimelineNavigatorUI buttonsCount={timeSegments.length} {...wheelNavigation} {...props} />;
};
