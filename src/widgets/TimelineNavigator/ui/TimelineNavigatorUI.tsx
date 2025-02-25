import { CenteredContainer } from '@shared/ui/CenteredContainer';
import { NavButton } from '@shared/ui/NavButton';
import { TimeTicker } from '@entities/TimeTicker';
import { WheelControl } from '@entities/WheelControl';
import { leadingZeroFormat } from '@shared/utils/numberFormatters';
import {
	defaultAnimationDuration,
	defaultDiameter,
	defaultShiftAngle,
} from '@entities/WheelControl/constants';
import { TimelineNavigatorUIProps } from '../types';
import { StyledYearRangeContainer } from './styles';
import styled from 'styled-components';

const StyledNavigation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	padding-inline-start: 80px;
	position: absolute;
	inset-block-start: 100%;
	inset-inline-start: 0;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.2;
`;
const StyledControls = styled.div`
	display: flex;
	gap: 20px;
`;

const TimelineNavigatorUI = ({
	startYear,
	endYear,
	handleNavigation,
	diameter = defaultDiameter,
	shiftAngle = defaultShiftAngle,
	animationDuration = defaultAnimationDuration,
	...dialProps
}: TimelineNavigatorUIProps) => (
	<>
		<WheelControl
			{...dialProps}
			shiftAngle={shiftAngle}
			$diameter={diameter}
			$animationDuration={animationDuration}
			style={{ margin: '0 auto' }}
		/>

		<CenteredContainer style={{ zIndex: -1 }}>
			<StyledYearRangeContainer $diameter={diameter}>
				<TimeTicker animationDuration={animationDuration} time={startYear} />
				<TimeTicker animationDuration={animationDuration} time={endYear} />
			</StyledYearRangeContainer>
		</CenteredContainer>

		<StyledNavigation>
			<span>
				{leadingZeroFormat(dialProps.activeButton + 1) +
					'/' +
					leadingZeroFormat(dialProps.buttonsCount)}
			</span>
			<StyledControls>
				<NavButton onClick={() => handleNavigation('back')} direction='back' />
				<NavButton onClick={() => handleNavigation('forward')} direction='forward' />
			</StyledControls>
		</StyledNavigation>
	</>
);

export default TimelineNavigatorUI;
