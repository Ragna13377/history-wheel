import { leadingZeroFormat } from '@shared/utils/numberFormatters';
import { CenteredContainer } from '@shared/ui/CenteredContainer';
import { NavButton } from '@shared/ui/NavButton';
import { Carousel } from '@entities/Carousel';
import { TimeTicker } from '@entities/TimeTicker';
import { WheelControl } from '@entities/WheelControl';
import {
	defaultAnimationDuration,
	defaultDiameter,
	defaultShiftAngle,
} from '@entities/WheelControl/constants';
import { TimelineNavigatorUIProps } from '../types';
import {
	StyledCenteredContainer,
	StyledControls, StyledNavButton,
	StyledNavigation,
	StyledWheelWrapper,
	StyledYearRangeContainer,
} from './styles';

const TimelineNavigatorUI = ({
	startYear,
	endYear,
	handleNavigation,
	facts,
	diameter = defaultDiameter,
	shiftAngle = defaultShiftAngle,
	animationDuration = defaultAnimationDuration,
	...dialProps
}: TimelineNavigatorUIProps) => (
	<>
		<StyledWheelWrapper>
			<StyledCenteredContainer>
				<WheelControl
					{...dialProps}
					shiftAngle={shiftAngle}
					$diameter={diameter}
					$animationDuration={animationDuration}
				/>
			</StyledCenteredContainer>
			<StyledYearRangeContainer $diameter={diameter}>
				<TimeTicker animationDuration={animationDuration} time={startYear} />
				<TimeTicker animationDuration={animationDuration} time={endYear} />
			</StyledYearRangeContainer>
		</StyledWheelWrapper>
		<StyledNavigation $diameter={diameter}>
			<span>
				{leadingZeroFormat(dialProps.activeButton + 1) +
					'/' +
					leadingZeroFormat(dialProps.buttonsCount)}
			</span>
			<StyledControls>
				<StyledNavButton onClick={() => handleNavigation('back')} direction='back' />
				<StyledNavButton onClick={() => handleNavigation('forward')} direction='forward' />
			</StyledControls>
		</StyledNavigation>
		{facts && <Carousel facts={facts} />}
	</>
);

export default TimelineNavigatorUI;
