import { WheelControlUIProps } from '../types';
import { NavButtonGrow } from '@shared/ui/NavButton';
import {
	StyledButtonContainer,
	StyledLabel,
	StyledWheelControl,
} from '@entities/WheelControl/ui/styles';

const WheelControlUI = ({
	activeButton,
	buttonAngles,
	labels,
	changeActiveButton,
	rotateDial,
	$animationDuration,
	$diameter,
	$rotation,
	...rest
}: WheelControlUIProps) => (
	<StyledWheelControl
		$diameter={$diameter}
		$rotation={$rotation}
		$animationDuration={$animationDuration}
		{...rest}
	>
		{buttonAngles.map((angle, index) => (
			<StyledButtonContainer
				key={index}
				$rotationFix={$rotation}
				$angle={angle}
				$diameter={$diameter}
				$animationDuration={$animationDuration}
			>
				<NavButtonGrow
					$isActive={activeButton === index}
					onClick={() => {
						rotateDial(angle);
						changeActiveButton(index);
					}}
				>
					{index + 1}
					<StyledLabel $isActive={activeButton === index} $animationDuration={$animationDuration}>
						{labels[index]}
					</StyledLabel>
				</NavButtonGrow>
			</StyledButtonContainer>
		))}
	</StyledWheelControl>
);

export default WheelControlUI;
