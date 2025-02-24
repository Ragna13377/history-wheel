'use client';
import { useEffect, useState } from 'react';
import { TimeTickerProps } from '../types';
import TimeTickerUI from '../ui/TimeTickerUI';

export const TimeTicker = ({ time, animationDuration, ...props }: TimeTickerProps) => {
	const [currentTime, setCurrentTime] = useState<number>(time);
	const [intervalDelay, setIntervalDelay] = useState(0);
	useEffect(() => {
		let intervalId: NodeJS.Timeout;
		if (currentTime !== time) {
			intervalId = setInterval(() => {
				setCurrentTime((prev) => prev + (time > prev ? 1 : -1));
			}, intervalDelay);
		}
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [currentTime, intervalDelay, time]);
	useEffect(() => {
		setIntervalDelay(animationDuration / Math.abs(time - currentTime));
	}, [time]);
	return <TimeTickerUI time={currentTime} {...props} />;
};
