'use client';
import { useState } from 'react';
import { CenteredContainer } from '@shared/ui/CenteredContainer';
import { Header } from '@shared/ui/Header';
import { NavButton } from '@shared/ui/NavButton';
import { Dial } from '@entities/Dial';
import { defaultActiveButton } from '@pages/home/constants';
import { HomePageProps } from '@pages/home/types';
import { StyledMain } from '@pages/home/ui/styles';

export const HomePageUI = ({ timeSegments }: HomePageProps) => {
	const [activeButton, setActiveButton] = useState<number>(defaultActiveButton);
	const changeActiveButton = (index: number) => {
		setActiveButton(index);
	};
	return (
		<StyledMain>
			<Header text='Исторические даты' />
			<CenteredContainer>
				<Dial
					buttonsCount={timeSegments.length}
					changeActiveButton={changeActiveButton}
					activeButton={activeButton}
				/>
			</CenteredContainer>
			<NavButton direction='left' />
			<NavButton direction='right' />
		</StyledMain>
	);
};
