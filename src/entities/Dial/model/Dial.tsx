import React from 'react';
import { DialProps } from '../types';
import DialUI from '../ui/DialUI';

export const Dial = ({ buttonsCount, radius }: DialProps) => {
	const buttonAngles = Array.from({ length: buttonsCount }, (_, ind) => (360 / buttonsCount) * ind);
	return <DialUI buttonAngles={buttonAngles} radius={radius} />;
};
