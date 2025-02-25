'use client';
import { CenteredContainer } from '@shared/ui/CenteredContainer';
import { Header } from '@shared/ui/Header';
import { TimelineNavigator } from '@widgets/TimelineNavigator';
import { HomePageProps } from '../types';
import { StyledMain } from './styles';

export const HomePageUI = ({ timeSegments }: HomePageProps) => (
	<StyledMain>
		<Header text='Исторические даты' />
		<CenteredContainer style={{ inlineSize: '100%' }}>
			<TimelineNavigator timeSegments={timeSegments} />
		</CenteredContainer>
	</StyledMain>
);
