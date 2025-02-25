'use client';
import { TimeTickerProps } from '../types';
import TimeTickerUI from '../ui/TimeTickerUI';
import { useTicker } from '@entities/TimeTicker/hooks/useTicker';

export const TimeTicker = ({ time, animationDuration, ...props }: TimeTickerProps) => {
	const { currentTime } = useTicker({ time, animationDuration });
	return <TimeTickerUI time={currentTime} {...props} />;
};
