'use client';
import styled from 'styled-components';
import { Header } from '@shared/ui/Header';
import { NavButton } from '@shared/ui/NavButton';
import { Dial } from '@entities/Dial';
import { CenteredContainer } from '@shared/ui/CenteredContainer';
import { useRef } from 'react';

const StyledMain = styled.main`
	position: relative;
	max-inline-size: 1440px;
	block-size: 100%;
	inline-size: 100%;
	margin: 0 auto;
	border-inline: 1px solid hsl(var(--accent));
	padding-block: 170px 104px;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	&:after,
	&:before {
		content: '';
		position: absolute;
		background-color: hsl(var(--accent));
	}
	&:after {
		block-size: 1px;
		inline-size: 100%;
		inset-block-start: 50%;
		inset-inline-start: 0;
	}
	&:before {
		block-size: 100%;
		inline-size: 1px;
		inset-block-start: 0;
		inset-inline-start: 50%;
	}
`;

export const HomePage = () => {
	return (
		<StyledMain>
			<Header text='Исторические даты' />
			<CenteredContainer>
				<Dial buttonsCount={6} radius={530} />
			</CenteredContainer>
			<NavButton direction='left' />
			<NavButton direction='right' />
			<NavButton $dotAnimation>4</NavButton>
		</StyledMain>
	);
};
