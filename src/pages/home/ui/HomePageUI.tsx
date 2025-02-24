'use client';
import { CenteredContainer } from '@shared/ui/CenteredContainer';
import { Header } from '@shared/ui/Header';
import { FactsWheel } from '@widgets/FactsWheel';
import { StyledMain } from './styles';
import { HomePageProps } from '@pages/home/types';

export const HomePageUI = ({ timeSegments }: HomePageProps) => (
	<StyledMain>
		<Header text='Исторические даты' />
		<CenteredContainer>
			<FactsWheel timeSegments={timeSegments} />
		</CenteredContainer>
	</StyledMain>
);
