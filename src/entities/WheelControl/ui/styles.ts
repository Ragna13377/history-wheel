import styled from 'styled-components';
import { ButtonContainerProps, WheelControlUIProps } from '@entities/WheelControl/types';

export const StyledWheelControl = styled.div<
	Pick<WheelControlUIProps, '$diameter' | '$animationDuration' | '$rotation'>
>`
	border: 1px solid hsla(var(--accent));
	border-radius: 50%;
	inline-size: ${({ $diameter }) => $diameter}px;
	block-size: ${({ $diameter }) => $diameter}px;
	aspect-ratio: 1/1;
	margin: 0 auto;
	transform: rotate(${({ $rotation }) => $rotation}deg);
	transition: transform ${({ $animationDuration }) => $animationDuration / 1000}s ease-in-out;
`;

export const StyledButtonContainer = styled.div<ButtonContainerProps>`
	position: absolute;
	inset-block-start: 50%;
	inset-inline-start: 50%;
	transform: translate(-50%, -50%) rotate(${({ $angle }) => $angle}deg)
		translateY(-${({ $diameter }) => $diameter / 2}px);
	transform-origin: center;
	> * {
		rotate: ${({ $angle, $rotationFix }) => -($angle + $rotationFix + 360) % 360}deg;
		transition: rotate ${({ $animationDuration }) => $animationDuration / 1000}s ease-in-out;
	}
	border-radius: 50%;
`;

export const StyledLabel = styled.span<{ $animationDuration: number; $isActive: boolean }>`
	position: absolute;
	inset-inline-start: calc(100% + 10px);
	inset-block-start: 15%;
	font-size: 20px;
	font-weight: 700;
	line-height: 30px;
	color: hsl(var(--accent));
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s ${({ $animationDuration }) => $animationDuration + 200}ms ease-in-out;
	${({ $isActive }) =>
		$isActive &&
		`
		opacity: 1;
	`}
	${({ $isActive }) =>
		!$isActive &&
		`
		opacity: 0;
		transition: opacity 0s;
	`}
`;
