'use client';
import { TimelineNavigator } from '@widgets/TimelineNavigator';
import { HomePageProps } from '../types';
import { StyledHeader, StyledHome } from './styles';

export const HomePageUI = ({ timeSegments }: HomePageProps) => {
	return (
		<StyledHome>
			<StyledHeader text='Исторические даты' />
			<TimelineNavigator timeSegments={timeSegments} />
		</StyledHome>
	);
};
