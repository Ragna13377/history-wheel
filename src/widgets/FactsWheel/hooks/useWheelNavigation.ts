import { useState } from 'react';
import { defaultActiveButton } from '@widgets/FactsWheel/constants';
import { TDirection } from '@shared/ui/NavButton/types';
import { FactsWheelProps } from '@widgets/FactsWheel/types';

export const useWheelNavigation = ({ timeSegments }: FactsWheelProps) => {
	const [activeButton, setActiveButton] = useState(defaultActiveButton);
	const [{ startYear, endYear }, setCurrentInterval] = useState(timeSegments[activeButton]);
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
		handleNavigation,
		changeActiveButton,
		activeLabel: timeSegments[activeButton].theme,
	};
};
