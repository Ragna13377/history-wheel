'use client';
import FactsWheelUI from '../ui/FactsWheelUI';
import { FactsWheelProps } from '@widgets/FactsWheel/types';
import { useWheelNavigation } from '@widgets/FactsWheel/hooks/useWheelNavigation';

export const FactsWheel = ({ timeSegments, ...props }: FactsWheelProps) => {
	const wheelNavigation = useWheelNavigation({ timeSegments });
	return <FactsWheelUI buttonsCount={timeSegments.length} {...wheelNavigation} {...props} />;
};
