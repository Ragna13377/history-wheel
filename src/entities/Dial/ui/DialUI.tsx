import { DialUIProps } from '../types';
import { NavButtonGrow } from '@shared/ui/NavButton';
import { StyledButtonContainer, StyledDial } from '@entities/Dial/ui/styles';

const DialUI = ({
	activeButton,
	buttonAngles,
	radius,
	animationDuration,
	changeActiveButton,
	rotation,
	rotateDial,
}: DialUIProps) => (
	<StyledDial radius={radius} $rotation={rotation} animationDuration={animationDuration}>
		{buttonAngles.map((angle, index) => (
			<StyledButtonContainer key={index} $rotationFix={rotation} $angle={angle} $radius={radius}>
				<NavButtonGrow
					$isActive={activeButton === index}
					onClick={() => {
						rotateDial(angle);
						changeActiveButton(index);
					}}
				>
					{index + 1}
				</NavButtonGrow>
			</StyledButtonContainer>
		))}
	</StyledDial>
);

export default DialUI;
