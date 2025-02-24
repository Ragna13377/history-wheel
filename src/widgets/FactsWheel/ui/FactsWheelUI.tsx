import { NavButton } from '@shared/ui/NavButton';
import { Dial } from '@entities/Dial';
import { TimeTicker } from '@entities/TimeTicker';
import {
	defaultAnimationDuration,
	defaultRadius,
	defaultShiftAngle,
} from '@entities/Dial/constants';
import { FactsWheelUIProps } from '../types';
import { StyledLabel, StyledTimeTicker } from './styles';

const FactsWheelUI = ({
	startYear,
	endYear,
	activeLabel,
	handleNavigation,
	radius = defaultRadius,
	shiftAngle = defaultShiftAngle,
	animationDuration = defaultAnimationDuration,
	...dialProps
}: FactsWheelUIProps) => (
	<>
		<Dial
			{...dialProps}
			radius={radius}
			shiftAngle={shiftAngle}
			animationDuration={animationDuration}
		/>
		<StyledTimeTicker radius={radius}>
			<TimeTicker animationDuration={animationDuration} time={startYear} />
			<TimeTicker animationDuration={animationDuration} time={endYear} />
		</StyledTimeTicker>
		<NavButton onClick={() => handleNavigation('back')} direction='back' />
		<NavButton onClick={() => handleNavigation('forward')} direction='forward' />
		<StyledLabel>{activeLabel}</StyledLabel>
	</>
);

export default FactsWheelUI;
