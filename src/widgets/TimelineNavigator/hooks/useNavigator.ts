import { useEffect, useState } from 'react';
import { TDirection } from '@shared/types';
import { FactsSchemaProps } from '@pages/home/shema';
import { getFactsByTimeSegmentId } from '@pages/home/actions';
import { defaultActiveButton } from '../constants';
import { TimelineNavigatorProps } from '../types';

export const useNavigator = ({ timeSegments }: TimelineNavigatorProps) => {
	const [activeButton, setActiveButton] = useState(defaultActiveButton);
	const [{ startYear, endYear }, setCurrentInterval] = useState(timeSegments[activeButton]);
	const [facts, setFacts] = useState<FactsSchemaProps[] | null>(null);
	useEffect(() => {
		getFactsByTimeSegmentId(activeButton + 1).then((facts) => setFacts(facts));
	}, [activeButton]);
	const changeActiveButton = (index: number) => {
		setActiveButton(index);
		setCurrentInterval(timeSegments[index]);
	};
	const handleNavigation = (direction: TDirection) => {
		const newIndex =
			direction === 'back'
				? (activeButton - 1 + timeSegments.length) % timeSegments.length
				: (activeButton + 1) % timeSegments.length;
		changeActiveButton(newIndex);
	};
	return {
		startYear,
		endYear,
		activeButton,
		facts,
		handleNavigation,
		changeActiveButton,
		labels: timeSegments.map((el) => el.theme),
	};
};
